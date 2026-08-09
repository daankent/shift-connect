package com.shiftconnect.backend.stores.presentation.dto

import com.shiftconnect.backend.stores.domain.Store
import io.swagger.v3.oas.annotations.media.Schema
import java.math.BigDecimal

data class StoreDTO(
    @field:Schema(description = "The unique store number.", example = "1213")
    val storeNumber: String,

    @field:Schema(description = "The address of the store.", example = "Passage 26, 3641 AK, Mijdrecht, Netherlands")
    val address: String,

    @field:Schema(description = "The latitude of the store's location.", example = "52.20624264148707")
    val lat: BigDecimal,

    @field:Schema(description = "The longitude of the store's location.", example = "4.866035563816197")
    val lon: BigDecimal

){
    companion object {
        fun fromEntity(store: Store): StoreDTO {
            return StoreDTO(
                storeNumber = store.storeNumber,
                address = store.address,
                lat = store.lat,
                lon = store.lon,
            )
        }
    }
}