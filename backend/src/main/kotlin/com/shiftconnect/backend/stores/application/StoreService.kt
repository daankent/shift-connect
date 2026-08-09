package com.shiftconnect.backend.stores.application

import com.shiftconnect.backend.stores.data.StoreRepository
import com.shiftconnect.backend.stores.domain.Store
import com.shiftconnect.backend.stores.exceptions.StoreNotFoundException
import org.springframework.stereotype.Service

@Service
class StoreService(private val storeRepository: StoreRepository) {
    fun getAllStores(): List<Store> = storeRepository.findAll()

    fun getStoreByStoreNumber(storeNumber: String): Store? =
        storeRepository.findByStoreNumber(storeNumber).firstOrNull() ?: throw StoreNotFoundException(storeNumber);

}