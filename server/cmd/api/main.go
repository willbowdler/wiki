package main

import (
	"fmt"
	"log"
	"net/http"
)

func main() {
	// Define a simple handler
	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		fmt.Fprintln(w, "Welcome to the Wiki API!")
	})

	// Define the server address
	addr := ":8080"
	log.Printf("Starting server on %s...", addr)

	// Start the server
	err := http.ListenAndServe(addr, nil)
	if err != nil {
		log.Fatalf("Could not start server: %v", err)
	}
}