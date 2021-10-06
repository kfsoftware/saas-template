import jwt from "jsonwebtoken";
import jwksClient from "jwks-rsa";
import http from "http";
export function createJwtMiddleware(jwks: string, issuer: string) {
  const client = jwksClient({
    jwksUri: jwks,
  });
  return async (headers: http.IncomingHttpHeaders) => {
    let user: any = null;
    if (headers.authorization) {
      const jwt = (headers.authorization as string).split(" ")[1];
      user = await validateJWT(client, issuer, jwt);
    }
    return user;
  };
}

async function validateJWT(
  client: jwksClient.JwksClient,
  issuer: string,
  token: string
): Promise<jwt.Jwt | null> {
  const getKey: jwt.GetPublicKeyOrSecret = (header, callback) => {
    if (!header.kid) {
      return callback(new Error("header kid is null"));
    }
    client.getSigningKey(header.kid, (err, key: any) => {
      if (!!err) {
        callback(err, undefined);
      } else {
        var signingKey = key.publicKey || key.rsaPublicKey;
        callback(null, signingKey);
      }
    });
  };
  const options: jwt.VerifyOptions = {
    issuer,
    clockTolerance: 10000,
  };
  try {
    await new Promise((resolve, reject) => {
      jwt.verify(token, getKey, options, (err, jwt) => {
        if (err) {
          reject(err);
          return;
        }
        resolve(jwt);
      });
    });
    const user = jwt.decode(token, { complete: true, json: true });
    if (user) {
      return user;
    } else {
      return null;
    }
  } catch (e) {
    console.log(e);
    return null;
  }
}
