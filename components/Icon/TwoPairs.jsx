/* eslint-disable max-len */
import PropTypes from 'prop-types';
import React from 'react';

import { Path, Use, G, Text } from 'react-native-svg';

import { Sprite } from './Sprite';
import { styles } from './styles';

export const TwoPairs = ({ width, height }) => (
  <Sprite height={height} width={width}>
    <Use href="#card" transform="matrix(.84066,-.38266,.38266,.84066,8596.55,35049.4)" />
    <Path
      d="m21276 36889l-1910 5101-1051-2310 651-1740 2310-1051m-4621 74l21278-9686 200 924-21096 9602c-269 123-389 444-267 713l32177 70688c122 269 443 389 712 267l5514-2510 200 924-5331 2426c-733 334-1603 8-1936-725l-32176-70687c-333-731-7-1603 725-1936m8767-1962l-4169 11135-1051-2310 2911-7773 2309-1052m4146-1887l-6428 17168-1051-2310 5170-13807 2309-1051m4146-1887l-8686 23201-1052-2310 7428-19840 2310-1051m4146-1888l-10945 29235-1051-2310 9686-25873 2310-1052m1589 4943l-10647 28438-1051-2310 10996-29371 702 3243m1259 5823l-10019 26761-1051-2309 10369-27695 701 3243m1260 5822l-9391 25085-1052-2309 9742-26019 701 3243m1260 5822l-8764 23409-1051-2310 9113-24342 702 3243m1260 5822l-8137 21733-1051-2310 8486-22666 702 3243m1259 5822l-7509 20057-1051-2310 7858-20990 702 3243m1260 5823l-6882 18380-1051-2310 7231-19313 702 3243m1259 5822l-6253 16704-1052-2310 6604-17637 701 3243m1260 5823l-5626 15027-1051-2310 5976-15961 701 3244m1260 5821l-4999 13352-1051-2310 5348-14285 702 3243m1260 5823l-4372 11675-1051-2310 4721-12609 702 3244m1259 5822l-3743 9999-1052-2309 4093-10933 702 3243m1260 5822l-936 2500-2310 1051 2544-6794 702 3243"
      fill="#e03c1b"
    />
    <Use href="#card" transform="matrix(.9039,-.19002,.19002,.9039,33542.3,20217.6)" />
    <G fill="#282828">
      <Text
        style={styles.text}
        transform="matrix(.97861,-.20573,.20573,.97861,-71181.8,-12137.5)"
        x="100000"
        y="65000"
      >
        2
      </Text>
      <Path d="m42483 32634c943 470 2289 1437 3030 2185 2111 2111-496 3972-1864 2486 212 585 506 1095 848 1453l-1392 292c169-464 233-1050 191-1671-654 1911-3789 1258-2707-1525 377-983 1220-2410 1894-3220" />
    </G>
    <Use href="#card" transform="matrix(.91782,-.10366,.10366,.91782,62672.3,15115.1)" />
    <Text
      fill="#282828"
      style={styles.text}
      transform="matrix(.99368,-.11223,.11223,.99368,-38521.6,-27001.2)"
      x="100000"
      y="65000"
    >
      2
    </Text>
    <Path d="m73247 31224l-2106 3667-2872-3105 2107-3668z" fill="#e03c1b" />
    <Use href="#card" transform="matrix(.92359,.0109,-.0109,.92359,91539.3,12632.7)" />
    <Text
      fill="#282828"
      style={styles.text}
      transform="matrix(.99993,.0118,-.0118,.99993,-3713.97,-41702.4)"
      x="100000"
      y="65000"
    >
      A
    </Text>
    <G fill="#e03c1b">
      <Path d="m98876 27320c-726-9-1323 574-1331 1298 8-724-573-1321-1298-1329-727-9-1322 574-1330 1298-13 1094 2582 3905 2582 3905 0 0 2664-2749 2677-3843 8-724-574-1321-1300-1329" />
      <Path d="m120729 48868c-634-300-1341-473-2088-481-2788-33-5068 2199-5101 4976-19 1637 1487 4279 3330 6890l3859-11385" />
    </G>
    <Use href="#card" transform="matrix(.87781,.28739,-.28739,.87781,129219,17038.9)" />
    <G fill="#282828">
      <G style={styles.text}>
        <Text transform="matrix(.95036,.31114,-.31114,.95036,54646.3,-63362.2)" x="100000" y="65000">A</Text>
        <Text transform="matrix(-.95036,-.31114,.31114,-.95036,237442,203945)" x="100000" y="65000">A</Text>
      </G>
      <G>
        <Path d="m131213 35001c828-745 543-2145-538-2499-1080-354-2138 606-1911 1698-797-349-1729 61-2001 892-462 1414 1239 2564 2374 1580-283 581-690 1076-929 1233l1262 413c-100-267-136-908-20-1544 333 1465 2385 1544 2848 130 272-831-236-1712-1085-1903" />
        <Path d="m163324 106383c227 1091-831 2052-1911 1698-1081-353-1366-1754-537-2500-850-190-1358-1072-1086-1902 463-1414 2515-1335 2848 130 116-636 80-1277-19-1544l1261 413c-239 156-646 652-928 1233 1134-984 2835 166 2373 1579-272 832-1203 1242-2001 893" />
        <Path d="m151381 69173c3038-2736 1992-7870-1970-9167-3961-1297-7840 2225-7009 6227-2924-1280-6338 226-7336 3273-1697 5183 4543 9399 8702 5791-1036 2132-2529 3949-3403 4522l4624 1514c-365-979-495-3328-70-5660 1220 5370 8745 5661 10442 477 998-3047-865-6280-3980-6977" />
      </G>
    </G>
  </Sprite>
);

TwoPairs.propTypes = {
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
