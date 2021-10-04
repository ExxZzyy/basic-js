import { NotImplementedError } from '../extensions/index.js';

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
export default function getDNSStats(domains) {
  let domainStats = {};
  for(let value of domains) {
    let region, name, subName;
    [region, name, subName] = value.split('.').reverse();
    region = '.' + region;
    if (name !== undefined) name = region + '.' + name;
    if (subName !== undefined) subName = name + '.' + subName;
    if (region !== undefined) domainStats[region] !== undefined ? domainStats[region]++ : domainStats[region] = 1;
    if (name !== undefined) domainStats[name] !== undefined ? domainStats[name]++ : domainStats[name] = 1;
    if (subName !== undefined) domainStats[subName] !== undefined ? domainStats[subName]++ : domainStats[subName] = 1;
  }
  return domainStats;
}
