import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';

// Функция для чтения YAML-файла
export function readYamlFile(filePath: string) {
  try {
    const fullPath = path.resolve(process.cwd(), filePath);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const data = yaml.load(fileContents);
    return data;
  } catch (error) {
    console.error('Error reading YAML file:', error);
    return null;
  }
}

// Можно добавить другие утилиты для работы с YAML здесь 