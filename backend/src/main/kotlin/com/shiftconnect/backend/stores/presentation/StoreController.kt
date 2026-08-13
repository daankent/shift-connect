package com.shiftconnect.backend.stores.presentation

import com.shiftconnect.backend.stores.application.StoreService
import com.shiftconnect.backend.stores.presentation.dto.StoreDTO
import io.swagger.v3.oas.annotations.Operation
import io.swagger.v3.oas.annotations.media.Content
import io.swagger.v3.oas.annotations.responses.ApiResponse
import io.swagger.v3.oas.annotations.tags.Tag
import org.springframework.http.ResponseEntity
import org.springframework.security.access.prepost.PreAuthorize
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PathVariable
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("/stores")
@Tag(name = "Stores", description = "Operations related to stores")
class StoreController(private val storeService: StoreService) {

    @GetMapping
    @Operation(
        summary = "Returns a list of all stores.",
        description = "Retrieves a list of all stores available in the system, sorted by store number from lowest to highest.",
        responses = [ApiResponse(
            responseCode = "200",
            description = "List of stores retrieved successfully",
        ), ApiResponse(responseCode = "204", description = "No content", content = [Content()])]
    )
    fun getAllStores(): ResponseEntity<List<StoreDTO>> {
        val stores = storeService.getAllStores().map { store -> StoreDTO.fromEntity(store) };

        return if (stores.isEmpty()) ResponseEntity.noContent().build() else ResponseEntity.ok(stores);
    }

    @GetMapping("/{storeNumber}")
    @Operation(
        summary = "Returns a store by its store number.",
        description = "Retrieves a store based on the provided store number.",
        responses = [ApiResponse(
            responseCode = "200",
            description = "Store retrieved successfully",
        ), ApiResponse(responseCode = "404", description = "Store not found", content = [Content()])]
    )
    fun getStoreByStoreNumber(@PathVariable storeNumber: String): ResponseEntity<StoreDTO> {
        val store = storeService.getStoreByStoreNumber(storeNumber)?.let { StoreDTO.fromEntity(it) }

        return if (store == null) ResponseEntity.notFound().build() else ResponseEntity.ok(store)
    }
}