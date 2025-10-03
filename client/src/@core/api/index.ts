const getBaseUrl = () => {
  if (DEVELOPMENT) return 'http://localhost:3000/api/v1';
  if (PRODUCTION) return '/api/v1';
};

const wikiFetch = async (url: string, options: RequestInit | undefined) =>
  fetch(`/${getBaseUrl()}/${url}`, options);

export { wikiFetch };
