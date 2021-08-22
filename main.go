package main

import (
	"encoding/json"
	"fmt"
	"github.com/pdepip/go-binance/binance"
	"github.com/tkanos/gonfig"
	"log"
	"net/http"
)


type Configuration struct {
	KEY string
	SECRET string
}
func GetConfig(params ...string) Configuration {
	configuration := Configuration{}
	env := "dev"
	if len(params) > 0 {
		env = params[0]
	}
	fileName := fmt.Sprintf("./%s_config.json", env)
	gonfig.GetConf(fileName, &configuration)
	return configuration
}
type PairValue struct {
	Pair string `json:"pair"`
	Value float64 `json:"value"`
}


func dataRatings(w http.ResponseWriter, r *http.Request){

	configuration := GetConfig()
	client :=  binance.New(configuration.SECRET, configuration.KEY)
	res, err := client.GetAllPrices()


	if err != nil {
		panic(err)
	}

	var data []PairValue

	for _, p := range res {
		marshal := &PairValue{
			Pair:  p.Symbol,
			Value: p.Price}

		data = append(data, *marshal)
	}

	encodeJson, err := json.Marshal(data)
	if err != nil {
		panic(err)
	}
	fmt.Fprintf(w, string(encodeJson))
}

func handleRequests() {
	http.HandleFunc("/", dataRatings)
	log.Fatal(http.ListenAndServe(":10000", nil))
}


func main() {
handleRequests()

}