// @ts-expect-error - This is a global variable injected by Vite
import * as __federation__ from "__federation__";

/**
 * Load a remote module dynamically
 * @param url Example: "http://localhost:5002/assets/remoteEntry.js"
 * @param name Example: "mfe2"
 * @param module Example: "./AppRoot"
 * @param from Whether the remote module is built with Vite or Webpack
 * @returns
 */
export async function loadDynamicRemote(
  url: string,
  name: string,
  module: string,
  from: "vite" | "webpack" = "vite"
) {
  __federation__.__federation_method_setRemote(name, {
    url: () => Promise.resolve(url),
    format: "esm",
    from: from,
  });

  return await __federation__.__federation_method_getRemote(name, module);
}
