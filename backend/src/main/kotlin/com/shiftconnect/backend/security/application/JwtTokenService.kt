package com.shiftconnect.backend.security.application

import com.shiftconnect.backend.accounts.domain.Account
import com.shiftconnect.backend.config.auth.JwtProperties
import org.springframework.stereotype.Service
import org.springframework.boot.context.properties.EnableConfigurationProperties
import org.springframework.security.oauth2.jwt.JwtEncoder
import org.springframework.security.oauth2.jwt.JwtClaimsSet
import org.springframework.security.oauth2.jwt.JwsHeader
import org.springframework.security.oauth2.jwt.JwtEncoderParameters
import org.springframework.security.oauth2.jose.jws.MacAlgorithm
import java.time.Instant
import java.time.temporal.ChronoUnit

@Service
@EnableConfigurationProperties(JwtProperties::class)
class JwtTokenService(
    private val jwtEncoder: JwtEncoder,
    private val jwtProperties: JwtProperties
) {
    fun createAccessToken(account: Account): String {
        val now = Instant.now()

        val claims = JwtClaimsSet.builder()
            .issuer(jwtProperties.issuer)
            .audience(listOf(jwtProperties.audience))
            .issuedAt(now)
            .expiresAt(now.plus(15, ChronoUnit.MINUTES))
            .subject(account.id.toString())
            .claim("email", account.email)
            .claim("roles", listOf(account.role))
            .build()

        val header = JwsHeader.with(MacAlgorithm.HS256).build()

        return jwtEncoder.encode(JwtEncoderParameters.from(header, claims)).tokenValue
    }
}