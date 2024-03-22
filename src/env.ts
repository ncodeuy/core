export function env(name: string): string {
  if (!(name in process.env)) throw new Error(`Environment variable ${name} not found`);
  return process.env[name] as string;
}

export function envOrDefault(name: string, defaultValue: any): string {
  try {
    return env(name);
  } catch(error) {
    return defaultValue;
  }
}