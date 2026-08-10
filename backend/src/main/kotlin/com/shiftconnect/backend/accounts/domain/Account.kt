package com.shiftconnect.backend.accounts.domain

import com.shiftconnect.backend.config.jpa.AuditableEntity
import com.shiftconnect.backend.stores.domain.Store
import jakarta.persistence.Column
import jakarta.persistence.Entity
import jakarta.persistence.EnumType
import jakarta.persistence.Enumerated
import jakarta.persistence.FetchType
import jakarta.persistence.GeneratedValue
import jakarta.persistence.GenerationType
import jakarta.persistence.Id
import jakarta.persistence.JoinColumn
import jakarta.persistence.ManyToOne
import jakarta.persistence.Table
import jakarta.validation.constraints.NotBlank
import java.util.UUID

@Entity
@Table(name = "accounts")
class Account(
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    var id: UUID? = null,

    @Column(nullable = false)
    @field:NotBlank(message = "Firstname cannot be blank")
    var firstName: String,

    @Column(nullable = false)
    @field:NotBlank(message = "Lastname cannot be blank")
    var lastName: String,

    @Column(nullable = false, unique = true)
    @field:NotBlank(message = "Email cannot be blank")
    var email: String,

    @Column(nullable = false)
    @field:NotBlank(message = "Password cannot be blank")
    var password: String,

    @Column(nullable = false)
    @Enumerated(EnumType.STRING)
    var role: AccountRole,

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "store_id", nullable = false)
    var store: Store
) : AuditableEntity() {
}