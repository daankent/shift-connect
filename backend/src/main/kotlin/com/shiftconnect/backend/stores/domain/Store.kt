package com.shiftconnect.backend.stores.domain

import jakarta.persistence.CheckConstraint
import jakarta.persistence.Column
import jakarta.persistence.Entity
import jakarta.persistence.GeneratedValue
import jakarta.persistence.GenerationType
import jakarta.persistence.Id
import jakarta.persistence.Table
import jakarta.validation.constraints.Pattern
import java.util.UUID

@Entity
@Table(name = "stores",  check = [
    CheckConstraint(
        name = "chk_store_number_4_digits",
        constraint = "store_number ~ '^[0-9]{4}$'"
    )
])
class Store(
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    var id: UUID? = null,

    @field:Pattern(regexp = "\\d{4}", message = "Store number must be exactly 4 digits")
    @Column(name = "store_number", nullable = false, unique = true, length = 4)
    var storeNumber: String,

    @Column(nullable = false)
    var address: String,
) {
}