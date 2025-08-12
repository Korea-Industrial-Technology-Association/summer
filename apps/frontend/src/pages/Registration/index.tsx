import "./styles.css";
import CheckBox from "../../components/common/CheckBox";
import {type ChangeEvent, useCallback, useEffect, useState} from "react";
import {Button} from "../../components/common";

const Registration = () => {
  const [checkedStates, setCheckedStates] = useState({
    collection: false,
    identification: false,
    thirdParty: false
  });
  const [isAllChecked, setIsAllChecked] = useState(false);

  const allCheckBtnClickHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setCheckedStates({
      collection: e.target.checked,
      identification: e.target.checked,
      thirdParty: e.target.checked
    })
  }

  const handleCheckChange = useCallback((key: keyof typeof checkedStates) => (isChecked: boolean) => {
    setCheckedStates(prev => ({...prev, [key]: isChecked}));
  }, []);
  useEffect(() => {
    const allChecked = Object.values(checkedStates).every(Boolean);
    setIsAllChecked(allChecked);
  }, [checkedStates]);


  const terms = [
    {
      title: "수집 및 이용목적",
      must: true,
      description: [
        "수집된 개인정보는 「제31회 KOITA 기술경영인 하계포럼」행사준비 및 진행(항공/호텔예약, 행사안내 및 여행자보험 가입포함)을 위한 목적 외에는 사용되지 않습니다.",
        "개인정보 수집항목 : 회사명, 성명, 직위, 주민번호, 연락처(휴대전화, 이메일, 팩스 등)",
        "개인정보 보유기간 : 포럼종료 후 정산 완료시 까지(2025년 8월)",
      ],
      type: "collection",
      checked: checkedStates.collection,
    },
    {
      title: "고유 식별번호 수집 및 이용에 대한 동의",
      must: true,
      description: [
        "수집하는 고유 식별번호 항목 및 이용목적: 주민등록번호(여행자 보험 가입목적)",
      ],
      type: "identification",
      checked: checkedStates.identification,
    },
    {
      title: "개인정보 제3자 제공 동의",
      must: true,
      description: [
        "위 수집/이용항목은 「제31회 KOITA 기술경영인 하계포럼」지정호텔인 롯데호텔제주(제주도 서귀포시 중문관광로 72번길 35), 지정여행사인 ㈜무크투어(서울시 마포구 마포대로 19 1층 2호), 행사대행사 이스터마케팅서비스㈜(서울시 중구 동호로 20길 6 아세아빌딩 503호)에 제공하여 수집/이용 목적에 따라 사용하는데 동의합니다.",
      ],
      type: "thirdParty",
      checked: checkedStates.thirdParty,
    }
  ]

  return (
    <div className="registration-container">
      <section className="registration-description">
        <h2>제31회 KOITA 기술경영인 하계포럼 참가 신청</h2>
        <p>
          한국산업기술진흥협회 제31회 KOITA 기술경영인 하계포럼 사무국은 행사 준비와 진행을 위해 아래와 같이 개인정보를 수집·이용내용을 관계법령에 따라 고지하오니 동의하여 주시기 바랍니다.
        </p>
      </section>
      <section className="registration-check-wrap">
        {terms.map((term, index) => (
          <CheckBox
            key={term.type}
            title={term.title}
            must={term.must}
            description={term.description}
            checked={term.checked}
            onChange={handleCheckChange(term.type as keyof typeof checkedStates)}
          />
        ))}
        <label className="all-check-label">
          <input
            type="checkbox"
            checked={isAllChecked}
            onChange={allCheckBtnClickHandler}
          />
          <span className="checkbox-custom">전체동의</span>
        </label>
      </section>
      <form className="registration-form">
        <div className="registration-title-box">
          <span className="title">참가신청</span>
        </div>
        <input type="text" name="phone_num" id="phone_num" placeholder="참가자의 휴대전화번호를 입력해주세요. ( - 없이)" maxLength={11}/>
        <Button children="확인"/>
      </form>
    </div>
  );
}

export default Registration;
