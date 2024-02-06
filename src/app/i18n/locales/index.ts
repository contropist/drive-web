import { Locale } from '../types';
import en from './en.json';
import es from './es.json';
import fr from './fr.json';
import zh from './zh.json';
import it from './it.json';
import ru from './ru.json';
import de from './de.json';

const locales = {
  [Locale.English]: en,
  [Locale.Spanish]: es,
  [Locale.French]: fr,
  [Locale.Chinese]: zh,
  [Locale.Italian]: it,
  [Locale.Russian]: ru,
  [Locale.German]: de,
};

export default locales;
