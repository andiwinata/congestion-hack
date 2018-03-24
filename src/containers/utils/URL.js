function addOrReplaceURLParam(url, key, value) {
  const encodedKey = encodeURIComponent(key);
  const encodedValue = encodeURIComponent(value);

  const [locationAndSearch, hash] = url.split('#');
  const [location, search] = locationAndSearch.split('?');

  if (!search && !hash) {
    return `${location}?${key}=${value}`;
  } else if (!search) {
    return `${location}?${key}=${value}#${hash}`;
  }

  // split by &
  // and remove empty value
  // then split by = to get array of [k, v]
  const kvpArray = search
    .split('&')
    .filter(param => {
      return param;
    })
    .map(kv => {
      return kv.split('=');
    });

  // removes duplicate
  const kvpObj = kvpArray.reduce((o, [k, v]) => {
    o[k] = v;
    return o;
  }, {});

  // set the value
  kvpObj[encodedKey] = encodedValue;

  const paramString = Object.keys(kvpObj).reduce((str, k, i) => {
    const prefix = i === 0 ? '' : '&';
    return `${str}${prefix}${k}=${kvpObj[k]}`;
  }, '');

  if (hash) {
    return `${location}?${paramString}#${hash}`;
  }
  return `${location}?${paramString}`;
}

export { addOrReplaceURLParam };
