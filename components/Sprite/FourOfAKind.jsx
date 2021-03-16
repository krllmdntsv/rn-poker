import React from "react"
import {Path, Use, G, Text} from "react-native-svg";
import {Sprite} from "./Sprite";
import {styles} from './styles';


export const FOUR_OF_A_KIND = ({width, height}) => (
    <Sprite width={width} height={height}>
        <Use href="#card-list"/>
            <Use transform="matrix(.84066,-.38266,.38266,.84066,8596.55,35049.4)" href="#card"/>
            <Path fill="#e03c1b"
                  d="m21276 36889l-1910 5101-1051-2310 651-1740 2310-1051m-4621 74l21579-9823 199 924-21396 9739c-269 123-389 444-267 713l32177 70688c122 269 443 389 712 267l5763-2624 200 924-5580 2540c-733 334-1603 8-1936-725l-32176-70687c-333-731-7-1604 725-1936m8767-1962l-4169 11135-1051-2310 2911-7773 2309-1052m4146-1887l-6428 17168-1051-2310 5170-13807 2309-1051m4146-1887l-8686 23201-1052-2310 7428-19840 2310-1051m4146-1888l-10945 29235-1051-2310 9686-25873 2310-1052m1795 4392l-10853 28989-1051-2310 11204-29926 700 3247m1257 5830l-10223 27305-1051-2309 10574-28243 700 3247m1257 5829l-9592 25622-1052-2309 9944-26560 700 3247m1257 5829l-8962 23939-1051-2310 9313-24876 700 3247m1257 5829l-8332 22256-1051-2310 8683-23193 700 3247m1257 5829l-7702 20573-1051-2310 8053-21509 700 3246m1258 5830l-7073 18889-1051-2310 7423-19826 701 3247m1257 5829l-6442 17206-1052-2310 6793-18143 701 3247m1257 5830l-5812 15522-1051-2310 6162-16460 701 3248m1256 5828l-5181 13840-1051-2310 5532-14777 700 3247m1258 5830l-4552 12156-1051-2310 4902-13094 701 3248m1257 5829l-3921 10473-1052-2309 4273-11411 700 3247m1257 5829l-1111 2967-2310 1051 2721-7265 700 3247"/>
            <Use transform="matrix(.9039,-.19002,.19002,.9039,33542.3,20217.6)" href="#card"/>
            <G fill="#282828">
                <G style={styles.text}>
                    <Text x="100000" y="65000" transform="matrix(.97861,-.20573,.20573,.97861,-72288.5,-11904.8)">10</Text>
                    <Text x="100000" y="65000" transform="matrix(-.97861,.20573,-.20573,-.97861,221767,127752)">10</Text>
                </G>
                <G >
                    <Path
                        d="m54707 32491c603-1855-1055-3728-3001-3319-1947 410-2710 2791-1411 4247-1514 169-2566 1605-2252 3103 536 2547 4121 2800 4979 317 80 1128-103 2236-328 2681l2273-478c-385-317-999-1257-1380-2322 1786 1928 4966 252 4430-2295-315-1497-1856-2389-3310-1934"/>
                    <Path
                        d="m58507 50569c603-1855-1054-3728-3001-3318-1947 409-2710 2790-1411 4246-1514 169-2566 1605-2251 3103 535 2547 4120 2801 4978 317 81 1128-103 2236-327 2681l2272-477c-384-318-998-1258-1379-2323 1785 1928 4965 253 4430-2295-315-1497-1857-2389-3311-1934"/>
                    <Path
                        d="m66108 86726c603-1856-1054-3728-3001-3319-1947 409-2710 2791-1411 4246-1514 169-2566 1606-2251 3103 535 2548 4120 2801 4978 317 81 1129-103 2236-327 2682l2272-478c-384-317-998-1257-1379-2322 1785 1927 4965 252 4429-2295-314-1498-1856-2389-3310-1934"/>
                    <Path
                        d="m62308 68648c603-1856-1055-3728-3001-3319-1947 409-2710 2791-1412 4246-1513 169-2565 1606-2251 3103 536 2548 4121 2801 4979 317 80 1129-103 2236-328 2682l2273-478c-385-318-999-1257-1379-2323 1785 1928 4964 253 4429-2294-315-1498-1856-2389-3310-1934"/>
                    <Path
                        d="m44250 34777c344-1060-603-2130-1715-1896-1113 234-1549 1594-807 2426-865 97-1466 918-1286 1773 306 1456 2355 1601 2845 181 46 645-59 1278-187 1533l1298-273c-220-182-570-719-788-1328 1020 1102 2837 145 2531-1311-180-855-1061-1365-1891-1105"/>
                </G>
            </G>
            <Use transform="matrix(.91782,-.10366,.10366,.91782,62672.3,15115.1)" href="#card"/>
            <Text x="100000" y="65000" fill="#282828" style={styles.text}
                  transform="matrix(.99368,-.11223,.11223,.99368,-39645.2,-26874.3)">10
            </Text>
            <G fill="#e03c1b" >
                <Path
                    d="m71773 28779c-721 82-1241 734-1160 1454-81-720-732-1240-1452-1159-723 82-1241 734-1160 1454 123 1087 3047 3555 3047 3555 0 0 2302-3059 2179-4145-81-720-732-1240-1454-1159"/>
                <Path
                    d="m82344 25895c-1320 149-2271 1341-2122 2658-149-1317-1339-2267-2656-2118-1323 149-2270 1341-2121 2658 224 1988 5572 6503 5572 6503 0 0 4211-5595 3987-7583-149-1317-1341-2267-2660-2118"/>
                <Path
                    d="m84417 44252c-1319 149-2271 1341-2122 2658-149-1317-1338-2267-2656-2119-1322 150-2270 1342-2121 2659 224 1987 5572 6502 5572 6502 0 0 4211-5594 3987-7582-149-1317-1340-2267-2660-2118"/>
                <Path
                    d="m86490 62608c-1319 149-2270 1342-2122 2659-148-1317-1338-2268-2656-2119-1322 149-2269 1341-2121 2658 225 1988 5573 6503 5573 6503 0 0 4211-5595 3986-7582-148-1317-1340-2267-2660-2119"/>
                <Path
                    d="m88564 80965c-1320 149-2271 1342-2122 2658-149-1316-1339-2267-2656-2118-1323 149-2270 1341-2122 2658 225 1988 5573 6503 5573 6503 0 0 4211-5595 3987-7583-149-1316-1341-2267-2660-2118"/>
            </G>
            <Use transform="matrix(.92359,.0109,-.0109,.92359,91539.3,12632.7)" href="#card"/>
            <G fill="#282828">
                <Text x="100000" y="65000" style={styles.text} transform="matrix(.99993,.0118,-.0118,.99993,-4784.76,-41715)">10
                </Text>
                <Path
                    d="m97569 26695c818 664 1922 1900 2483 2791 1601 2519-1347 3769-2359 2021 80 618 255 1180 511 1603l-1422-17c266-417 455-974 549-1590-1053 1723-3971 404-2311-2076 582-878 1715-2087 2549-2732"/>
                <Path
                    d="m107329 24878c1432 1163 3364 3325 4346 4885 2802 4409-2359 6596-4130 3537 140 1081 448 2065 895 2805l-2488-29c465-730 796-1706 961-2783-1842 3015-6950 708-4044-3634 1018-1536 3000-3652 4460-4781"/>
                <Path
                    d="m107111 43350c1432 1163 3364 3325 4346 4885 2802 4409-2359 6596-4130 3537 140 1081 448 2065 895 2805l-2488-29c465-730 796-1706 961-2783-1842 3016-6950 708-4044-3634 1018-1536 3000-3652 4460-4781"/>
                <Path
                    d="m106893 61822c1432 1163 3364 3325 4346 4885 2802 4409-2358 6596-4130 3538 140 1080 448 2064 895 2805l-2488-30c465-730 796-1706 961-2783-1842 3016-6950 708-4044-3633 1018-1537 3000-3653 4460-4782"/>
                <Path
                    d="m106675 80295c1432 1162 3364 3325 4346 4885 2802 4408-2358 6595-4129 3537 139 1081 447 2064 895 2805l-2488-30c464-730 796-1706 960-2783-1842 3016-6950 708-4044-3633 1018-1537 3000-3653 4460-4781"/>
            </G>
            <Use transform="matrix(.87781,.28739,-.28739,.87781,129219,17038.9)" href="#card"/>
            <G fill="#282828" style={styles.text}>
                <Text x="100000" y="65000" transform="matrix(.95036,.31114,-.31114,.95036,53628.6,-63695.4)">10</Text>
                <Text x="100000" y="65000" transform="matrix(-.95036,-.31114,.31114,-.95036,238460,204279)">10</Text>
            </G>
            <G fill="#e03c1b" >
                <Path d="m132138 36086l-3440 2460-1321-4019 3441-2459z"/>
                <Path d="m164711 106055l-3440 2460-1320-4018 3441-2459z"/>
                <Path d="m174632 50493l-6020 4305-2311-7031 6023-4304z"/>
                <Path d="m168885 68050l-6021 4305-2311-7032 6022-4304z"/>
                <Path d="m163136 85606l-6019 4305-2312-7031 6023-4304z"/>
                <Path d="m157389 103163l-6020 4305-2311-7032 6022-4304z"/>
                <Path d="m143031 40147l-6020 4305-2311-7031 6022-4304z"/>
                <Path d="m137283 57704l-6020 4305-2311-7032 6022-4304z"/>
                <Path d="m131535 75260l-6020 4305-2311-7031 6022-4304z"/>
                <Path d="m125787 92817l-6020 4305-2311-7032 6022-4304z"/>
                <Path d="m144462 89212l-6020 4305-2311-7032 6022-4304z"/>
                <Path d="m155958 54098l-6021 4305-2311-7031 6023-4304z"/>
            </G>
    </Sprite>
);
