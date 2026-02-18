const ENV = 'dev'; // ! [dev/prod/local]
const DEVICE = 'android'; // ! [android/ios]
const DEBUG_WEB = true; // ! [true/false]

const list_api_url = {
  local: '',
  dev: 'https://mdlm-mobile-api-test.nits.co.id/api/v1',
  prod: 'https://med4limasmbtools.nits.co.id/api/v1'
}

const list_web_url = {
  local: '',
  dev: 'https://mdlm-web-test.nits.co.id',
  prod: 'https://www.medalimas.co.id'
}

const list_backend_url = {
  local: '',
  dev: 'https://mdlm-erp-test.nits.co.id',
  prod: 'https://mdlm.nits.co.id'
} 

const image_list_url = {
  api: list_api_url[ENV].replace('/v1', ''),
  backend: list_backend_url[ENV],
  assets: 'https://med4limsticket.nits.co.id'
}

const config = {
  device_cd: DEVICE,
  api_url: list_api_url[ENV],
  web_url: list_web_url[ENV],
  storage_key: 'eca1c74e-121b-4740-ba27-502400a3e374',
  web_client_id: '841788369141-qrcrpv5be48bk7tl7f0h149jca14afu6.apps.googleusercontent.com',
  disable_message: 'Mohon maaf, fitur ini sedang dalam pengembangan.',
  loadingTime: 1500,
  debug_web: DEBUG_WEB,
  isDeviceReady: false,
}

export async function apiFetch<T = any>(
  url: string = "",
  params: Record<string, any> = {}
): Promise<T> {
  try {
    const data = {
      ...params,
      device_cd: config?.device_cd,
    };

    const res = await fetch(`${config.api_url}/${url}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams(data).toString(),
    });

    const json = await res.json(); // ⬅️ SEKALI SAJA

    console.log('success fetch:', json)
    return json as T;
  } catch (error: any) {
    console.error("apiFetch error:", error.message);
    throw error;
  }
}

export function image_url(path = "", key = 'api') {
  return image_list_url[key as keyof typeof image_list_url] + "/" + path;
}
