package com.shiftconnect.backend.stores.presentation.dto

import com.shiftconnect.backend.stores.domain.Store
import io.swagger.v3.oas.annotations.media.Schema

data class StoreDTO(
    @field:Schema(description = "The unique store number.", example = "1213")
    val storeNumber: String,
    @field:Schema(description = "The address of the store.", example = "Passage 26, 3641 AK, Mijdrecht, Netherlands")
    val address: String,
){
    companion object {
        fun fromEntity(store: Store): StoreDTO {
            return StoreDTO(
                storeNumber = store.storeNumber,
                address = store.address
            )
        }
    }
}