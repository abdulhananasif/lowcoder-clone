package org.lowcoder.sdk.auth;

import lombok.Getter;
import lombok.experimental.SuperBuilder;
import lombok.extern.jackson.Jacksonized;

/**
 * This class is for Generic Auth Provider
 */
@Getter
@SuperBuilder
@Jacksonized
public class Oauth2GenericAuthConfig extends Oauth2SimpleAuthConfig {
    private String sourceDescription;
    private String sourceIcon;
    private String sourceCategory;
    private String issuerUri;
    private String authorizationEndpoint;
    private String tokenEndpoint;
    private String userInfoEndpoint;
    private String scope;
    private Boolean userInfoIntrospection;
}
