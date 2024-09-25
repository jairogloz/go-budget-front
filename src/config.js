const getEnvVar = (key, defaultValue = undefined) => {
  const value = import.meta.env[key];

  if (value === undefined || value === null) {
    if (defaultValue !== undefined) {
      return defaultValue;
    }
    throw new Error(`Environment variable ${key} is not set.`);
  }

  return value;
};

const config = {
  backendURL: getEnvVar("VITE_GO_BUDGET_BACKEND_URL"),
};

export default config;
