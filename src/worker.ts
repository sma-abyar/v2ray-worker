<<<<<<< HEAD
/*
 * V2RAY Worker v2.2
 * Copyright 2023 Vahid Farid (https://twitter.com/sma_abyar)
 * Licensed under GPLv3 (https://github.com/sma_abyar/v2ray-worker/blob/main/Licence.md)
 */

=======
>>>>>>> 5da00613d551eb82dee5233d1a262f5453b1a6b7
import { VlessOverWSHandler } from "./vless"
import { GetPanel, PostPanel } from "./panel"
import { GetLogin, PostLogin } from "./auth"
import { GetConfigList } from "./collector"
import { ToYamlSubscription } from "./clash"
import { ToBase64Subscription, ToRawSubscription } from "./sub"
import { ToCustomConfigSubscription } from "./custom"
import { Env, Config } from "./interfaces"

let panelPath = ""

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url: URL = new URL(request.url)
    const path: string = url.pathname.replace(/^\/|\/$/g, "")
    const lcPath = path.toLowerCase()
    if (["sub", "clash", /*"custom", */"raw"].includes(lcPath)) {
      const configList: Array<Config> = await GetConfigList(url, env)
      if (lcPath == "clash") {
        return new Response(ToYamlSubscription(configList));
      // } else if (lcPath == "custom") {
      //   return new Response(ToCustomConfigSubscription(configList));
      } else if (lcPath == "raw") {
        return new Response(ToRawSubscription(configList));
      } else {
        return new Response(ToBase64Subscription(configList));
      }
    } else if (lcPath == "vless-ws") {
      return VlessOverWSHandler(request, url.hostname, env);
    } else if (lcPath == "login") {
      if (request.method === "GET") {
        return GetLogin(request, env)
      } else if (request.method === "POST") {
        return PostLogin(request, env)
      }
    } else if (path) {
      return fetch(new Request(new URL("https://" + path), request))
    } else {
      if (request.method === "GET") {
        return GetPanel(request, env)
      } else if (request.method === "POST") {
        return PostPanel(request, env)
      }
    }
    return new Response("Invalid request!");
  }
}
