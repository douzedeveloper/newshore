import { PluginObject } from "vue";
import Vue from "vue";

export class ApiError extends Error {
  public statusCode: string;
  public code: string;

  constructor(data: any = {}) {
    super(data.message);
    this.code = data.code;
    this.statusCode = data.statusCode;
  }
}

export class Api {
  constructor(
    private url: string = "",
    private onError: (e: ApiError) => void | Promise<void> = console.error
  ) {}

  async get(params: any) {
    return await this.request(params);
  }

  private async request(endpoint: string) {
    const uri = `${this.url}${endpoint}`;
    try {
      const result = await Vue.axios.get(uri).then((response) => {
        return response.data;
      });
      if (result?.items?.length === 0) {
        throw new Error("Error");
      }
      return result;
    } catch (e) {
      await Promise.resolve(this.onError(e));
      return undefined;
    }
  }
}

interface ApiOptions {
  onError: (e: ApiError) => void | Promise<void>;
  url: string;
}

const ApiPlugin: PluginObject<ApiOptions> = {
  install: (Vue: any, options?: ApiOptions) => {
    Vue.$api = Vue.prototype.$api = new Api(options?.url, options?.onError);
  },
};

export default ApiPlugin;
