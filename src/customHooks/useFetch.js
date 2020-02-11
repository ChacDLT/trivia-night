import { useEffect, useState } from 'react';

const useFetch = url => {
  const [state, setState] = useState({ data: null, loading: true });

  useEffect(() => {
    fetch(url)
      .then(response => response.text())
      .then(text => JSON.parse(text))
      .then(res => {
        setState({ data: res.results, loading: false });
      });
  }, [url]);

  return state;
};

export default useFetch;
