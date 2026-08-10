package com.shiftconnect.backend.config.auth

import org.springframework.boot.context.properties.ConfigurationProperties

@ConfigurationProperties(prefix = "jwt")
data class JwtProperties(
    val secret: String,
    val issuer: String,
    val audience: String,
    val accessTokenMinutes: Long
)
