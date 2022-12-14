export const items = [
  {
    id: 75,
    email: "al26@naver.com",
    name: "김범",
    mobile: "01023550669",
    adminType: "FIELD",
    fieldOffice: "asd",
    basicAddr: "서울 서초구 나루터로 15 (잠원동, 신동초등학교)",
    detailAddr: "qwe",
    authorizeType: "GENERAL",
    status: true,
    createdAt: 1666072259,
    updatedAt: 1666142079,
    deleted: false,
  },
  {
    id: 65,
    email: "mr@test.com",
    name: "김터",
    mobile: "01023340549",
    adminType: "INTERNAL",
    fieldOffice: null,
    basicAddr: null,
    detailAddr: null,
    authorizeType: "GENERAL",
    status: true,
    createdAt: 1664238274,
    updatedAt: 1666083701,
    deleted: false,
  },
  {
    id: 64,
    email: "s2d@zips.com",
    name: "김미",
    mobile: "01058948730",
    adminType: "FIELD",
    fieldOffice: "집스 직영점",
    basicAddr: "서울 동작구 7길 9",
    detailAddr: "1층",
    authorizeType: "GENERAL",
    status: true,
    createdAt: 1658983718,
    updatedAt: 1665734589,
    deleted: false,
  },
  {
    id: 63,
    email: "ku415@zips.com",
    name: "이근",
    mobile: "01091784577",
    adminType: "FIELD",
    fieldOffice: "집스대점",
    basicAddr: "서울 광진구 로 361",
    detailAddr: "101호 집영산 점",
    authorizeType: "GENERAL",
    status: true,
    createdAt: 1658977864,
    updatedAt: 1658987414,
    deleted: false,
  },
  {
    id: 62,
    email: "s87p@zips.com",
    name: "성필",
    mobile: "01037741505",
    adminType: "FIELD",
    fieldOffice: "집산 송점",
    basicAddr: "서울 송파구 동 5",
    detailAddr: "20호",
    authorizeType: "GENERAL",
    status: true,
    createdAt: 1658976715,
    updatedAt: 1665734589,
    deleted: false,
  },
  {
    id: 61,
    email: "h75g@zips.com",
    name: "수정",
    mobile: "01057777430",
    adminType: "FIELD",
    fieldOffice: "집산 점",
    basicAddr: "서울 동대문구 로 5",
    detailAddr: "101호",
    authorizeType: "GENERAL",
    status: true,
    createdAt: 1658976481,
    updatedAt: 1658987414,
    deleted: false,
  },
  {
    id: 60,
    email: "s452ky@zips.com",
    name: "김연",
    mobile: "01000008430",
    adminType: "FIELD",
    fieldOffice: "집스산 유점",
    basicAddr: "서울 강북구 동 4",
    detailAddr: "2층 집산",
    authorizeType: "GENERAL",
    status: true,
    createdAt: 1658976397,
    updatedAt: 1658987414,
    deleted: false,
  },
];

export const getReplaceMobile = (mobile: string) => {
  return mobile.replace(
    /(^02.{0}|^01.{1}|[0-9]{3})([0-9]+)([0-9]{4})/,
    "$1-$2-$3"
  );
};

export const masterHeader = [];

export const authorizeTypes = [
  { id: "MASTER", label: "마스터" },
  { id: "GENERAL", label: "일반" },
];

export const statusType = [
  { id: "1", label: "승인" },
  { id: "0", label: "미승인" },
];

export const header = [
  {
    // id: 'id',
    minWidth: 50,
    title: "No",
    wrapWidth: 1,
    align: "center",
  },
  {
    id: "adminType",
    minWidth: 80,
    title: "담당자 구분",
    align: "center",
  },
  {
    id: "email",
    minWidth: 180,
    title: "ID",
  },
  {
    id: "basicAddr",
    minWidth: 180,
    title: "지역",
  },
  {
    id: "fieldOffice",
    minWidth: 180,
    title: "업체명",
  },
  {
    id: "name",
    minWidth: 150,
    title: "담당자명",
  },
  {
    id: "mobile",
    minWidth: 150,
    title: "연락처",
  },
  {
    id: "authorizeType",
    minWidth: 130,
    title: "권한",
    align: "center",
  },
  {
    id: "status",
    minWidth: 130,
    title: "상태",
    align: "center",
  },
  {
    id: "resetPw",
    minWidth: 110,
    title: "비밀번호 초기화",
    align: "center",
  },
  {
    id: "delete",
    minWidth: 50,
    title: "정보삭제",
    align: "center",
  },
  {
    id: "modify",
    minWidth: 180,
    title: "정보수정",
    align: "center",
  },
];
