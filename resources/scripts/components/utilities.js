export function updateQueryStringParameter(key, value) {
  const url = window.location.href;
  const re = new RegExp(`([?&])${key}=.*?(&|$)`, 'i');
  const separator = url.indexOf('?') !== -1 ? '&' : '?';

  let newUrl;
  if (url.match(re)) {
    if (typeof value === 'undefined') {
      newUrl = url.replace(re, '');
    } else {
      newUrl = url.replace(re, `$1${key}=${value}$2`);
    }
  } else {
    newUrl = `${url + separator + key}=${value}`;
  }

  window.history.replaceState({ path: newUrl }, '', newUrl);
}

export function getQueryStringParameter(key) {
  const url = window.location.href;
  const replacedKey = key.replace(/[[\]]/g, '\\$&');
  const regex = new RegExp(`[?&]${replacedKey}(=([^&#]*)|&|#|$)`);
  const results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, ' '));
}
