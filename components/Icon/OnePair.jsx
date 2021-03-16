/* eslint-disable max-len */
import PropTypes from 'prop-types';
import React from 'react';

import { Path, Use, G, Text } from 'react-native-svg';

import { Sprite } from './Sprite';
import { styles } from './styles';

export const OnePair = ({ width, height }) => (
  <Sprite height={height} width={width}>
    <Use href="#card" transform="matrix(.84066,-.38265,.38265,.84066,8596.77,35049.1)" />
    <Path
      d="m21276 36888l-1910 5101-1051-2309 652-1740 2309-1052m-4621 74l19809-9016 222 914-19649 8943c-269 122-389 444-266 713l32175 70688c122 268 444 389 713 267l5977-2721 222 914-5816 2647c-733 334-1603 8-1937-725l-32175-70687c-333-731-6-1604 725-1937m8767-1961l-4169 11135-1051-2310 2911-7774 2309-1051m4147-1887l-6428 17168-1052-2310 5170-13807 2310-1051m4145-1887l-8686 23201-1052-2310 7429-19840 2309-1051m3505-175l-10304 27522-1051-2310 9687-25873 1357-618 311 1279m1355 5568l-9772 26100-1051-2310 10068-26892 755 3102m1355 5568l-9240 24677-1051-2309 9536-25469 755 3101m1354 5569l-8706 23255-1052-2310 9004-24047 754 3102m1355 5568l-8174 21833-1052-2310 8471-22625 755 3102m1355 5568l-7642 20411-1051-2310 7938-21202 755 3101m1354 5568l-7109 18989-1051-2310 7406-19780 754 3101m1355 5569l-6577 17566-1051-2310 6873-18358 755 3102m1355 5568l-6045 16144-1051-2310 6341-16935 755 3101m1355 5569l-5512 14721-1052-2310 5809-15513 755 3102m1354 5567l-4979 13300-1052-2310 5276-14092 755 3102m1355 5569l-4447 11877-1051-2310 4743-12669 755 3102m1355 5568l-3915 10455-1051-2309 4211-11247 755 3101m1354 5569l-1202 3209-2309 1051 2757-7362 754 3102"
      fill="#e03c1b"
    />
    <Use href="#card" transform="matrix(.9039,-.19002,.19002,.9039,33541.6,20217.7)" />
    <Path
      d="m45514 24779l-2977 4561-522-2483 1016-1556 2483-522m-4526-936l24334-5116 114 920-24258 5100c-289 61-477 348-416 637l15978 76005c61 289 348 477 638 416l17768-3735 114 920-17692 3719c-788 166-1566-342-1732-1130l-15978-76004c-165-787 344-1567 1130-1732m8984-1l-6498 9957-521-2484 4536-6951 2483-522m4458-937l-10018 15351-523-2484 8058-12345 2483-522m4458-938l-13539 20747-522-2483 11577-17741 2484-523m4458-937l-17060 26142-522-2483 15098-23137 2484-522m2514 2042l-18637 28558-522-2483 18619-28532 540 2457m613 4954l-18313 28062-522-2483 18494-28338 341 2759m614 4954l-17989 27566-523-2483 18170-27842 342 2759m613 4954l-17666 27069-521-2482 17845-27347 342 2760m613 4953l-17341 26574-522-2483 17522-26850 341 2759m614 4955l-17018 26077-522-2483 17198-26354 342 2760m613 4953l-16694 25582-522-2483 16875-25858 341 2759m614 4955l-16371 25085-522-2483 16551-25362 342 2760m613 4954l-16047 24590-522-2484 16228-24866 341 2760m614 4954l-15723 24093-523-2484 15904-24369 342 2760m613 4954l-15399 23597-522-2484 15579-23874 342 2761m614 4954l-15076 23101-522-2483 15256-23378 342 2760m613 4953l-11354 17399-2483 522 13495-20680 342 2759m613 4954l-7509 11507-2483 523 9651-14789 341 2759m614 4955l-3665 5615-2483 522 5806-8897 342 2760m585 4722l-2275 478 1961-3006 314 2528"
      fill="#e03c1b"
    />
    <Use href="#card" transform="matrix(.91782,-.10366,.10366,.91782,62671.7,15115.4)" />
    <Path
      d="m74159 20789l-3395 4259-285-2521 1159-1453 2521-285m-4417-1360l22782-2574-10 931-22668 2561c-294 33-508 301-475 595l8717 77175c33 294 301 508 595 475l12959-1464-10 931-12845 1451c-800 90-1527-489-1617-1289l-8717-77175c-90-798 491-1527 1289-1617m8944 848l-7411 9298-285-2522 5174-6491 2522-285m4527-511l-11426 14335-285-2522 9189-11528 2522-285m4526-511l-15441 19373-285-2522 13204-16566 2522-285m4527-511l-19457 24410-285-2521 17220-21604 2522-285m183 4937l-19129 24000-284-2521 19445-24398-32 2919m-57 5240l-18560 23286-285-2521 18877-23683-32 2918m-58 5241l-17991 22572-285-2521 18308-22970-32 2919m-58 5240l-17422 21859-285-2522 17739-22256-32 2919m-57 5240l-16854 21145-284-2521 17170-21543-32 2919m-58 5240l-16284 20432-285-2522 16601-20828-32 2918m-57 5241l-15716 19717-285-2521 16033-20115-32 2919m-58 5240l-15147 19004-285-2522 15464-19401-32 2919m-58 5241l-14578 18290-285-2522 14895-18688-32 2920m-57 5239l-14009 17577-285-2522 14326-17974-32 2919m-58 5241l-13440 16863-285-2522 13757-17261-32 2920m-57 5240l-12872 16149-285-2521 13189-16547-32 2919m-58 5240l-8427 10574-2522 284 10981-13777-32 2919m-57 5240l-3844 4822-2521 285 6397-8025-32 2918m-49 4394l-1789 202 1812-2274-23 2072"
      fill="#e03c1b"
    />
    <Use href="#card" transform="matrix(.92359,.0109,-.0109,.92359,91538.7,12632.7)" />
    <G fill="#282828">
      <Text style={styles.text} transform="matrix(.99993,.0118,-.0118,.99993,-3765.67,-41703)" x="100000" y="65000">
        3
      </Text>
      <G>
        <Path
          d="m98827 29171c567-960-125-2210-1262-2224-1136-13-1858 1220-1314 2193-866-93-1631 577-1641 1452-17 1487 1951 2073 2738 794-96 640-335 1235-516 1455l1327 16c-175-224-401-825-481-1467 756 1298 2738 758 2755-730 11-874-739-1563-1606-1489"
        />
        <Path
          d="m126156 29407c992-1680-219-3868-2208-3891-1990-24-3252 2135-2300 3838-1515-164-2854 1010-2872 2540-30 2603 3414 3629 4791 1391-167 1119-586 2160-902 2546l2322 27c-307-393-702-1444-842-2566 1324 2270 4791 1325 4822-1278 18-1530-1293-2735-2811-2607"
        />
      </G>
    </G>
    <Use href="#card" transform="matrix(.87781,.28739,-.28739,.87781,129219,17038.9)" />
    <Text
      fill="#282828"
      style={styles.text}
      transform="matrix(.95036,.31114,-.31114,.95036,54597.1,-63378)"
      x="100000"
      y="65000"
    >
      3
    </Text>
    <G fill="#e03c1b">
      <Path
        d="m131813 33250c-690-226-1434 151-1659 840 225-689-150-1432-839-1658-692-226-1434 151-1659 840-340 1039 1292 4500 1292 4500 0 0 3366-1825 3706-2864 226-688-151-1432-841-1658"
      />
      <Path
        d="m160274 107333c690 226 1434-151 1659-839-225 688 150 1431 839 1657 692 226 1434-151 1659-840 340-1039-1292-4500-1292-4500 0 0-3366 1825-3706 2864-226 689 151 1432 841 1658"
      />
      <Path
        d="m149805 66530c-1262-413-2623 276-3035 1535 412-1259-275-2618-1535-3031-1264-414-2622 276-3034 1536-622 1901 2364 8231 2364 8231 0 0 6156-3337 6778-5238 413-1260-276-2620-1538-3033"
      />
      <Path
        d="m158427 40196c-1262-414-2623 275-3035 1535 412-1260-275-2619-1535-3031-1265-415-2622 276-3034 1535-623 1901 2364 8231 2364 8231 0 0 6156-3337 6778-5238 412-1259-276-2619-1538-3032"
      />
      <Path
        d="m141183 92865c-1262-413-2623 276-3035 1535 412-1259-274-2619-1535-3031-1264-414-2622 276-3034 1536-622 1901 2364 8231 2364 8231 0 0 6156-3337 6779-5238 412-1260-277-2620-1539-3033"
      />
    </G>
    <Text
      fill="#282828"
      style={styles.text}
      transform="matrix(-.95036,-.31114,.31114,-.95036,237490,203961)"
      x="100000"
      y="65000"
    >
      3
    </Text>
  </Sprite>
);

OnePair.propTypes = {
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
