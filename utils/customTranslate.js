import { translationsGerman } from './comm';


export default function customTranslate(template, replacements) {
    replacements = replacements || {};

    // Translate
    template = translationsGerman[template] || template;

    // Replace
    return template.replace(/{([^}]+)}/g, function (_, key) {
        return replacements[key] || '{' + key + '}';
    });
}
