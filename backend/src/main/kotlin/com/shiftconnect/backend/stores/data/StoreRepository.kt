package com.shiftconnect.backend.stores.data

import com.shiftconnect.backend.stores.domain.Store
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository
import java.util.UUID

@Repository
interface StoreRepository: JpaRepository<Store, UUID> {
    fun findByStoreNumber(storeNumber: String): MutableList<Store>;
}