// FLAGS.JSX
const flags = [
  {
    name: 'Andorra',
    imageUrl: '/flags/ad.png',
  },
  {
    name: 'United Arab Emirates',
    imageUrl: '/flags/ae.png',
  },
  {
    name: 'Afghanistan',
    imageUrl: '/flags/af.png',
  },
  {
    name: 'Antigua and Barbuda',
    imageUrl: '/flags/ag.png',
  },
  {
    name: 'Albania',
    imageUrl: '/flags/al.png',
  },
  {
    name: 'Armenia',
    imageUrl: '/flags/am.png',
  },
  {
    name: 'Angola',
    imageUrl: '/flags/ao.png',
  },
  {
    name: 'Antarctica',
    imageUrl: '/flags/aq.png',
  },
  {
    name: 'Argentina',
    imageUrl: '/flags/ar.png',
  },
  {
    name: 'American Samoa',
    imageUrl: '/flags/as.png',
  },
  {
    name: 'Austria',
    imageUrl: '/flags/at.png',
  },
  {
    name: 'Australia',
    imageUrl: '/flags/au.png',
  },
  {
    name: 'Aruba',
    imageUrl: '/flags/aw.png',
  },
  {
    name: 'Åland Islands',
    imageUrl: '/flags/ax.png',
  },
  {
    name: 'Azerbaijan',
    imageUrl: '/flags/az.png',
  },
  {
    name: 'Bosnia and Herzegovina',
    imageUrl: '/flags/ba.png',
  },
  {
    name: 'Barbados',
    imageUrl: '/flags/bb.png',
  },
  {
    name: 'Bangladesh',
    imageUrl: '/flags/bd.png',
  },
  {
    name: 'Belgium',
    imageUrl: '/flags/be.png',
  },
  {
    name: 'Burkina Faso',
    imageUrl: '/flags/bf.png',
  },
  {
    name: 'Bulgaria',
    imageUrl: 'flags/bg.png',
  },
  {
    name: 'Bahrain',
    imageUrl: '/flags/bh.png',
  },
  {
    name: 'Burundi',
    imageUrl: 'flags/bi.png',
  },
  {
    name: 'Benin',
    imageUrl: 'flags/bj.png',
  },
  {
    name: 'Bermuda',
    imageUrl: 'flags/bm.png',
  },
  {
    name: 'Brunei',
    imageUrl: 'flags/bn.png',
  },
  {
    name: 'Bolivia',
    imageUrl: 'flags/bo.png',
  },
  {
    name: 'Brazil',
    imageUrl: 'flags/br.png',
  },
  {
    name: 'Bahamas',
    imageUrl: 'flags/bs.png',
  },
  {
    name: 'Bhutan',
    imageUrl: 'flags/bt.png',
  },
  {
    name: 'Botswana',
    imageUrl: 'flags/bw.png',
  },
  {
    name: 'Belarus',
    imageUrl: 'flags/by.png',
  },
  {
    name: 'Belize',
    imageUrl: 'flags/bz.png',
  },
  {
    name: 'Canada',
    imageUrl: 'flags/ca.png',
  },
  {
    name: 'Democratic Republic of the Congo',
    imageUrl: 'flags/cd.png',
  },
  {
    name: 'Central African Republic',
    imageUrl: 'flags/cf.png',
  },
  {
    name: 'Republic of the Congo',
    imageUrl: 'flags/cg.png',
  },
  {
    name: 'Switzerland',
    imageUrl: 'flags/ch.png',
  },
  {
    name: 'Ivory Coast',
    imageUrl: 'flags/ci.png',
  },
  {
    name: 'Cook Islands',
    imageUrl: 'flags/ck.png',
  },
  {
    name: 'Chile',
    imageUrl: 'flags/cl.png',
  },
  {
    name: 'Cameroon',
    imageUrl: 'flags/cm.png',
  },
  {
    name: 'China',
    imageUrl: 'flags/cn.png',
  },
  {
    name: 'Colombia',
    imageUrl: 'flags/co.png',
  },
  {
    name: 'Costa Rica',
    imageUrl: 'flags/cr.png',
  },
  {
    name: 'Cuba',
    imageUrl: 'flags/cu.png',
  },
  {
    name: 'Cape Verde',
    imageUrl: 'flags/cv.png',
  },
  {
    name: 'Cyprus',
    imageUrl: 'flags/cy.png',
  },
  {
    name: 'Czech Republic',
    imageUrl: 'flags/cz.png',
  },
  {
    name: 'Germany',
    imageUrl: 'flags/de.png',
  },
  {
    name: 'Djibouti',
    imageUrl: 'flags/dj.png',
  },
  {
    name: 'Denmark',
    imageUrl: 'flags/dk.png',
  },
  {
    name: 'Dominica',
    imageUrl: 'flags/dm.png',
  },
  {
    name: 'Dominican Republic',
    imageUrl: 'flags/do.png',
  },
  {
    name: 'Algeria',
    imageUrl: 'flags/dz.png',
  },
  {
    name: 'Ecuador',
    imageUrl: 'flags/ec.png',
  },
  {
    name: 'Estonia',
    imageUrl: 'flags/ee.png',
  },
  {
    name: 'Egypt',
    imageUrl: 'flags/eg.png',
  },
  {
    name: 'Western Sahara',
    imageUrl: 'flags/eh.png',
  },
  {
    name: 'Eritrea',
    imageUrl: 'flags/er.png',
  },
  {
    name: 'Spain',
    imageUrl: 'flags/es.png',
  },
  {
    name: 'Ethiopia',
    imageUrl: 'flags/et.png',
  },
  {
    name: 'Finland',
    imageUrl: 'flags/fi.png',
  },
  {
    name: 'Fiji',
    imageUrl: 'flags/fj.png',
  },
  {
    name: 'Falkland Islands',
    imageUrl: 'flags/fk.png',
  },
  {
    name: 'Micronesia',
    imageUrl: 'flags/fm.png',
  },
  {
    name: 'Faroe Islands',
    imageUrl: 'flags/fo.png',
  },
  {
    name: 'France',
    imageUrl: 'flags/fr.png',
  },
  {
    name: 'Gabon',
    imageUrl: 'flags/ga.png',
  },
  {
    name: 'England',
    imageUrl: 'flags/gb-eng.png',
  },
  {
    name: 'Northern Ireland',
    imageUrl: 'flags/gb-nir.png',
  },
  {
    name: 'Scotland',
    imageUrl: 'flags/gb-sct.png',
  },
  {
    name: 'Wales',
    imageUrl: 'flags/gb-wls.png',
  },
  {
    name: 'United Kingdom',
    imageUrl: 'flags/gb.png',
  },
  {
    name: 'Grenada',
    imageUrl: 'flags/gd.png',
  },
  {
    name: 'Georgia',
    imageUrl: 'flags/ge.png',
  },
  {
    name: 'French Guiana',
    imageUrl: 'flags/gf.png',
  },
  {
    name: 'Guernsey',
    imageUrl: 'flags/gg.png',
  },
  {
    name: 'Ghana',
    imageUrl: 'flags/gh.png',
  },
  {
    name: 'Gibraltar',
    imageUrl: 'flags/gi.png',
  },
  {
    name: 'Greenland',
    imageUrl: 'flags/gl.png',
  },
  {
    name: 'Gambia',
    imageUrl: 'flags/gm.png',
  },
  {
    name: 'Guinea',
    imageUrl: 'flags/gn.png',
  },
  {
    name: 'Equatorial Guinea',
    imageUrl: 'flags/gq.png',
  },
  {
    name: 'Greece',
    imageUrl: 'flags/gr.png',
  },
  {
    name: 'Guatemala',
    imageUrl: 'flags/gt.png',
  },
  {
    name: 'Guam',
    imageUrl: 'flags/gu.png',
  },
  {
    name: 'Guinea-Bissau',
    imageUrl: 'flags/gw.png',
  },
  {
    name: 'Guyana',
    imageUrl: 'flags/gy.png',
  },
  {
    name: 'Hong Kong',
    imageUrl: 'flags/hk.png',
  },
  {
    name: 'Honduras',
    imageUrl: 'flags/hn.png',
  },
  {
    name: 'Croatia',
    imageUrl: 'flags/hr.png',
  },
  {
    name: 'Haiti',
    imageUrl: 'flags/ht.png',
  },
  {
    name: 'Hungary',
    imageUrl: 'flags/hu.png',
  },
  {
    name: 'Indonesia',
    imageUrl: 'flags/id.png',
  },
  {
    name: 'Ireland',
    imageUrl: 'flags/ie.png',
  },
  {
    name: 'Israel',
    imageUrl: 'flags/il.png',
  },
  {
    name: 'Isle of Man',
    imageUrl: 'flags/im.png',
  },
  {
    name: 'India',
    imageUrl: 'flags/in.png',
  },
  {
    name: 'Iraq',
    imageUrl: 'flags/iq.png',
  },
  {
    name: 'Iran',
    imageUrl: 'flags/ir.png',
  },
  {
    name: 'Iceland',
    imageUrl: 'flags/is.png',
  },
  {
    name: 'Italy',
    imageUrl: 'flags/it.png',
  },
  {
    name: 'Jersey',
    imageUrl: 'flags/je.png',
  },
  {
    name: 'Jamaica',
    imageUrl: 'flags/jm.png',
  },
  {
    name: 'Jordan',
    imageUrl: 'flags/jo.png',
  },
  {
    name: 'Japan',
    imageUrl: 'flags/jp.png',
  },
  {
    name: 'Kenya',
    imageUrl: 'flags/ke.png',
  },
  {
    name: 'Kyrgyzstan',
    imageUrl: 'flags/kg.png',
  },
  {
    name: 'Cambodia',
    imageUrl: 'flags/kh.png',
  },
  {
    name: 'Kiribati',
    imageUrl: 'flags/ki.png',
  },
  {
    name: 'Comoros',
    imageUrl: 'flags/km.png',
  },
  {
    name: 'Saint Kitts and Nevis',
    imageUrl: 'flags/kn.png',
  },
  {
    name: 'North Korea',
    imageUrl: 'flags/kp.png',
  },
  {
    name: 'South Korea',
    imageUrl: 'flags/kr.png',
  },
  {
    name: 'Kuwait',
    imageUrl: 'flags/kw.png',
  },
  {
    name: 'Cayman Islands',
    imageUrl: 'flags/ky.png',
  },
  {
    name: 'Kazakhstan',
    imageUrl: 'flags/kz.png',
  },
  {
    name: 'Laos',
    imageUrl: 'flags/la.png',
  },
  {
    name: 'Lebanon',
    imageUrl: 'flags/lb.png',
  },
  {
    name: 'Saint Lucia',
    imageUrl: 'flags/lc.png',
  },
  {
    name: 'Liechtenstein',
    imageUrl: 'flags/li.png',
  },
  {
    name: 'Sri Lanka',
    imageUrl: 'flags/lk.png',
  },
  {
    name: 'Liberia',
    imageUrl: 'flags/lr.png',
  },
  {
    name: 'Lesotho',
    imageUrl: 'flags/ls.png',
  },
  {
    name: 'Lithuania',
    imageUrl: 'flags/lt.png',
  },
  {
    name: 'Luxembourg',
    imageUrl: 'flags/lu.png',
  },
  {
    name: 'Latvia',
    imageUrl: 'flags/lv.png',
  },
  {
    name: 'Libya',
    imageUrl: 'flags/ly.png',
  },
  {
    name: 'Morocco',
    imageUrl: 'flags/ma.png',
  },
  {
    name: 'Monaco',
    imageUrl: 'flags/mc.png',
  },
  {
    name: 'Moldova',
    imageUrl: 'flags/md.png',
  },
  {
    name: 'Montenegro',
    imageUrl: 'flags/me.png',
  },
  {
    name: 'Madagascar',
    imageUrl: 'flags/mg.png',
  },
  {
    name: 'Marshall Islands',
    imageUrl: 'flags/mh.png',
  },
  {
    name: 'North Macedonia',
    imageUrl: 'flags/mk.png',
  },
  {
    name: 'Mali',
    imageUrl: 'flags/ml.png',
  },
  {
    name: 'Myanmar',
    imageUrl: 'flags/mm.png',
  },
  {
    name: 'Mongolia',
    imageUrl: 'flags/mn.png',
  },
  {
    name: 'Macau',
    imageUrl: 'flags/mo.png',
  },
  {
    name: 'Martinique',
    imageUrl: 'flags/mq.png',
  },
  {
    name: 'Mauritania',
    imageUrl: 'flags/mr.png',
  },
  {
    name: 'Montserrat',
    imageUrl: 'flags/ms.png',
  },
  {
    name: 'Malta',
    imageUrl: 'flags/mt.png',
  },
  {
    name: 'Mauritius',
    imageUrl: 'flags/mu.png',
  },
  {
    name: 'Maldives',
    imageUrl: 'flags/mv.png',
  },
  {
    name: 'Malawi',
    imageUrl: 'flags/mw.png',
  },
  {
    name: 'Mexico',
    imageUrl: 'flags/mx.png',
  },
  {
    name: 'Malaysia',
    imageUrl: 'flags/my.png',
  },
  {
    name: 'Mozambique',
    imageUrl: 'flags/mz.png',
  },
  {
    name: 'Namibia',
    imageUrl: 'flags/na.png',
  },
  {
    name: 'Niger',
    imageUrl: 'flags/ne.png',
  },
  {
    name: 'Nigeria',
    imageUrl: 'flags/ng.png',
  },
  {
    name: 'Nicaragua',
    imageUrl: 'flags/ni.png',
  },
  {
    name: 'Netherlands',
    imageUrl: 'flags/nl.png',
  },
  {
    name: 'Norway',
    imageUrl: 'flags/no.png',
  },
  {
    name: 'Nepal',
    imageUrl: 'flags/np.png',
  },
  {
    name: 'Nauru',
    imageUrl: 'flags/nr.png',
  },
  {
    name: 'New Zealand',
    imageUrl: 'flags/nz.png',
  },
  {
    name: 'Oman',
    imageUrl: 'flags/om.png',
  },
  {
    name: 'Panama',
    imageUrl: 'flags/pa.png',
  },
  {
    name: 'Peru',
    imageUrl: 'flags/pe.png',
  },
  {
    name: 'French Polynesia',
    imageUrl: 'flags/pf.png',
  },
  {
    name: 'Papua New Guinea',
    imageUrl: 'flags/pg.png',
  },
  {
    name: 'Philippines',
    imageUrl: 'flags/ph.png',
  },
  {
    name: 'Pakistan',
    imageUrl: 'flags/pk.png',
  },
  {
    name: 'Poland',
    imageUrl: 'flags/pl.png',
  },
  {
    name: 'Puerto Rico',
    imageUrl: 'flags/pr.png',
  },
  {
    name: 'Palestine',
    imageUrl: 'flags/ps.png',
  },
  {
    name: 'Palau',
    imageUrl: 'flags/pw.png',
  },
  {
    name: 'Portugal',
    imageUrl: 'flags/pt.png',
  },
  {
    name: 'Paraguay',
    imageUrl: 'flags/py.png',
  },
  {
    name: 'Qatar',
    imageUrl: 'flags/qa.png',
  },
  {
    name: 'Romania',
    imageUrl: 'flags/ro.png',
  },
  {
    name: 'Serbia',
    imageUrl: 'flags/rs.png',
  },
  {
    name: 'Russia',
    imageUrl: 'flags/ru.png',
  },
  {
    name: 'Rwanda',
    imageUrl: 'flags/rw.png',
  },
  {
    name: 'Saudi Arabia',
    imageUrl: 'flags/sa.png',
  },
  {
    name: 'Solomon Islands',
    imageUrl: 'flags/sb.png',
  },
  {
    name: 'Seychelles',
    imageUrl: 'flags/sc.png',
  },
  {
    name: 'Sudan',
    imageUrl: 'flags/sd.png',
  },
  {
    name: 'Sweden',
    imageUrl: 'flags/se.png',
  },
  {
    name: 'Singapore',
    imageUrl: 'flags/sg.png',
  },
  {
    name: 'Saint Helena',
    imageUrl: 'flags/sh.png',
  },
  {
    name: 'Slovenia',
    imageUrl: 'flags/si.png',
  },
  {
    name: 'Slovakia',
    imageUrl: 'flags/sk.png',
  },
  {
    name: 'Sierra Leone',
    imageUrl: 'flags/sl.png',
  },
  {
    name: 'San Marino',
    imageUrl: 'flags/sm.png',
  },
  {
    name: 'Senegal',
    imageUrl: 'flags/sn.png',
  },
  {
    name: 'Somalia',
    imageUrl: 'flags/so.png',
  },
  {
    name: 'Suriname',
    imageUrl: 'flags/sr.png',
  },
  {
    name: 'South Sudan',
    imageUrl: 'flags/ss.png',
  },
  {
    name: 'Sao Tome and Principe',
    imageUrl: 'flags/st.png',
  },
  {
    name: 'El Salvador',
    imageUrl: 'flags/sv.png',
  },
  {
    name: 'Syria',
    imageUrl: 'flags/sy.png',
  },
  {
    name: 'Eswatini',
    imageUrl: 'flags/sz.png',
  },
  {
    name: 'Chad',
    imageUrl: 'flags/td.png',
  },
  {
    name: 'Togo',
    imageUrl: 'flags/tg.png',
  },
  {
    name: 'Thailand',
    imageUrl: 'flags/th.png',
  },
  {
    name: 'Tajikistan',
    imageUrl: 'flags/tj.png',
  },
  {
    name: 'East Timor',
    imageUrl: 'flags/tl.png',
  },
  {
    name: 'Turkmenistan',
    imageUrl: 'flags/tm.png',
  },
  {
    name: 'Tunisia',
    imageUrl: 'flags/tn.png',
  },
  {
    name: 'Tonga',
    imageUrl: 'flags/to.png',
  },
  {
    name: 'Turkey',
    imageUrl: 'flags/tr.png',
  },
  {
    name: 'Trinidad and Tobago',
    imageUrl: 'flags/tt.png',
  },
  {
    name: 'Tuvalu',
    imageUrl: 'flags/tv.png',
  },
  {
    name: 'Taiwan',
    imageUrl: 'flags/tw.png',
  },
  {
    name: 'Tanzania',
    imageUrl: 'flags/tz.png',
  },
  {
    name: 'Ukraine',
    imageUrl: 'flags/ua.png',
  },
  {
    name: 'Uganda',
    imageUrl: 'flags/ug.png',
  },
  {
    name: 'United States',
    imageUrl: 'flags/us.png',
  },
  {
    name: 'Uruguay',
    imageUrl: 'flags/uy.png',
  },
  {
    name: 'Uzbekistan',
    imageUrl: 'flags/uz.png',
  },
  {
    name: 'Vatican City',
    imageUrl: 'flags/va.png',
  },
  {
    name: 'Saint Vincent and the Grenadines',
    imageUrl: 'flags/vc.png',
  },
  {
    name: 'Venezuela',
    imageUrl: 'flags/ve.png',
  },
  {
    name: 'British Virgin Islands',
    imageUrl: 'flags/vg.png',
  },
  {
    name: 'US Virgin Islands',
    imageUrl: 'flags/vi.png',
  },
  {
    name: 'Vietnam',
    imageUrl: 'flags/vn.png',
  },
  {
    name: 'Vanuatu',
    imageUrl: 'flags/vu.png',
  },
  {
    name: 'Samoa',
    imageUrl: 'flags/ws.png',
  },
  {
    name: 'Kosovo',
    imageUrl: 'flags/xk.png',
  },
  {
    name: 'Yemen',
    imageUrl: 'flags/ye.png',
  },
  {
    name: 'South Africa',
    imageUrl: 'flags/za.png',
  },
  {
    name: 'Zambia',
    imageUrl: 'flags/zm.png',
  },
  {
    name: 'Zimbabwe',
    imageUrl: 'flags/zw.png',
  },
];

export default flags;
