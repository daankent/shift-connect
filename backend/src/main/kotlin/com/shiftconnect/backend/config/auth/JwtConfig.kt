package com.shiftconnect.backend.config.auth

import com.nimbusds.jose.jwk.JWKSet
import com.nimbusds.jose.jwk.OctetSequenceKey
import com.nimbusds.jose.jwk.source.ImmutableJWKSet
import com.nimbusds.jose.proc.SecurityContext
import org.springframework.boot.context.properties.EnableConfigurationProperties
import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration
import org.springframework.security.oauth2.jose.jws.MacAlgorithm
import org.springframework.security.oauth2.jwt.JwtDecoder
import org.springframework.security.oauth2.jwt.JwtEncoder
import org.springframework.security.oauth2.jwt.JwtValidators
import org.springframework.security.oauth2.jwt.NimbusJwtDecoder
import org.springframework.security.oauth2.jwt.NimbusJwtEncoder
import java.util.Base64
import javax.crypto.SecretKey
import javax.crypto.spec.SecretKeySpec

@Configuration
@EnableConfigurationProperties(JwtProperties::class)
class JwtConfig(
    private val jwtProperties: JwtProperties
) {
    private fun secretKey(): SecretKey {
        val bytes = Base64.getDecoder().decode(jwtProperties.secret)
        return SecretKeySpec(bytes, "HmacSHA256")
    }

    @Bean
    fun jwtEncoder(): JwtEncoder {
        val jwk = OctetSequenceKey.Builder(secretKey()).build()
        val jwks = ImmutableJWKSet<SecurityContext>(JWKSet(jwk))
        return NimbusJwtEncoder(jwks)
    }

    @Bean
    fun jwtDecoder(): JwtDecoder {
        val decoder = NimbusJwtDecoder
            .withSecretKey(secretKey())
            .macAlgorithm(MacAlgorithm.HS256)
            .build()

        decoder.setJwtValidator(JwtValidators.createDefaultWithIssuer(jwtProperties.issuer))
        return decoder
    }
}