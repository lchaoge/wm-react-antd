const UrlMapping = {
  isLocalHost: false,
  origin: window.location.origin
}


export const POST_GET_MENULIST = (UrlMapping.isLocalHost ? '/wmWorkwebApp/operplat/apis' : UrlMapping.origin) + '/api/menu.json'; // 初始化菜单

