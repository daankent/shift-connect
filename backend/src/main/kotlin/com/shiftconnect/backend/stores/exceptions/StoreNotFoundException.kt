package com.shiftconnect.backend.stores.exceptions

class StoreNotFoundException(val storeNumber: String): Exception("Store $storeNumber could not be found") {
}