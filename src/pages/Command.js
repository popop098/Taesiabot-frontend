const commands = [
    {
        header: '알림',
        description: '모든 명령어에서는 '[]','()'을 제외하여 명령해주세요.'
    },
    {
        header: 'ㅌ재생 [검색어 or URL]',
        description: '음악을 재생해요'
    },
    {
        header: 'ㅌ나가',
        description: '통화방에서 나가요'
    },
    {
        header: 'ㅌ재생목록',
        description: '지금 플레이리스트를 보여줘요'
    },
    {
        header: 'ㅌ나가',
        description: '통화방에서 나가요'
    },
    {
        header: 'ㅌ스킵',
        description: '음악을 하나 스킵해요'
    },
    {
        header: 'ㅌ지금곡',
        description: '지금 플레이중인 곡을 보여줘요'
    },
    {
        header: 'ㅌ시간스킵 [초]',
        description: '초만큼 시간을 스킵해요'
    },
    {
        header: 'ㅌ일시정지',
        description: '재생중이던 음악을 일시정지해요, 일시정지상태에서 한번더 입력하면 다시 재생해요'
    },
    {
        header: 'ㅌ볼륨 [설정한 볼륨]',
        description: '설정한 볼륨만큼 소리크기를 조정해요, 만약 볼륨값을 입력하지않으면 현재 볼륨값을 알려줘요'
    },
    {
        header: 'ㅌ셔플',
        description: '대기목록의 순서를 랜덤으로 바꿔 재생해요'
    },
    {
        header: 'ㅌ반복',
        description: '최근재생한 곡을 반복재생해요'
    },
    {
        header: 'ㅌ삭제 [대기 번호]',
        description: '대기목록의 번호를 대기열에서 삭제시켜요'
    },
    {
        header: 'ㅌ가입',
        description: '모든서비스에 가입해요'
    },
    {
        header: 'ㅌ직업',
        description: '직업리스트를 보여줘요'
    },
    {
        header: 'ㅌ취직 [직업이름]',
        description: '직업리스트에 있는 직업이름을 입력하면 해당 직업으로 취직해요'
    },
    {
        header: 'ㅌ지갑',
        description: '자기가 가진 현금을 보여줘요'
    },
    {
        header: 'ㅌ통장',
        description: '자기가 입금한 돈을 보여줘요'
    },
    {
        header: 'ㅌ가방',
        description: '가방내용물을 보여줘요'
    },
    {
        header: 'ㅌ탈퇴',
        description: '전체서비스에서 탈퇴해요'
    },
    {
        header: 'ㅌ통장',
        description: '자기가 입금한 돈을 보여줘요'
    },
    {
        header: 'ㅌ로또구매',
        description: '복권을 구매해요'
    },
    {
        header: 'ㅌ당첨확인',
        description: '구매한 복권의 당첨유무를 확인해요'
    },
    {
        header: 'ㅌ랜덤입양',
        description: '펫을 랜덤으로 입양해요'
    },
    {
        header: 'ㅌ유저입양',
        description: '다른 유저가 분양중인 펫을 입양해요'
    },
    {
        header: 'ㅌ자판기',
        description: '자판기에서 펫사료를 구매해요'
    },
    {
        header: 'ㅌ펫이름변경',
        description: '펫이름을 번경해요'
    },
    {
        header: 'ㅌ파양',
        description: '펫을 파양(소유권포기)해요'
    },
    {
        header: 'ㅌ펫분양',
        description: '펫을 분양게시글에 등록해요'
    },
    {
        header: 'ㅌ펫상태',
        description: '펫상태를 알려줘요'
    },
    {
        header: 'ㅌ길들이기',
        description: '펫을 길들여요'
    },
    {
        header: 'ㅌ입금 [금액]',
        description: '현금을 통장에 입금해요'
    },
    {
        header: 'ㅌ출금 [금액]',
        description: '통장에서 돈을 뽑아요'
    },
    {
        header: 'ㅌ도박 [금액]',
        description: '도박을 하여 랜덤으로 돈을 얻거나 잃어요'
    },
    {
        header: 'ㅌ나무',
        description: '나무를 캐서 돈을 벌어요'
    },
    {
        header: 'ㅌ지원금',
        description: '지원금을 받아요'
    },
    {
        header: 'ㅌ송금 [돈을 보낼 유저;@user]',
        description: '지정한 상대에게 돈을 보내요'
    },
    {
        header: 'ㅌ일하기',
        description: '일해서 돈을 벌어요'
    },
    {
        header: 'ㅌ유저메모 [유저;@user] [내용]',
        description: '지정한 상대에게 간단한 메모를 남겨요'
    },
    {
        header: 'ㅌ메모삭제 [유저;@user]',
        description: '지정한 상대에게 남긴 메모를 삭제해요'
    },
    {
        header: 'ㅌ유저정보 [유저;@user]',
        description: '지정한 상대의 정보를 확인해요'
    },
    {
        header: 'ㅌ알림판 [채널;#channel]',
        description: '지정한 채널에 공지를 등록해요(everyone멘션포함되어있어요)'
    },
    {
        header: 'ㅌ청소 [갯수]',
        description: '설정한 갯수만큼 채팅을 지워요'
    },
    {
        header: 'ㅌ밴 [유저;@user]',
        description: '지정한 상대를 서버에서 밴해요'
    },
    {
        header: 'ㅌ킥 [유저;@user]',
        description: '지정한 상대를 서버에서 강제퇴장시켜요'
    },
    {
        header: 'ㅌ경고 [유저;@user]',
        description: '지정한 상대에게 경고를 부여해요'
    },
    {
        header: 'ㅌ경고리셋 [유저;@user]',
        description: '지정한 상대에게 부여된 경고를 초기화해요'
    },
    {
        header: 'ㅌ처벌기록리셋 [유저;@user]',
        description: '지정한 상대에게 기록된 처벌기록을 초기화해요'
    },
    {
        header: 'ㅌ설명',
        description: '간단한 설명을 해줘요'
    },
    {
        header: 'ㅌ크레딧',
        description: '봇제작에 도움을 주신 정보를 알려줘요'
    },
    {
        header: 'ㅌ봇정보',
        description: '봇의 상태를 알려줘요'
    },
    {
        header: 'ㅌ정보카드 [유저;@user]',
        description: '지정한 상대의 정보를 이미지화 하여 알려주거나 상대를 지정하지않으면 자신의 정보로 알려줘요'
    },
    {
        header: 'ㅌ날씨 [지역]',
        description: '지정한 지역의 날씨정보를 알려줘요'
    },
    {
        header: 'ㅌ인벤',
        description: '인벤에서 핫뉴스를 알려줘요'
    },
    {
        header: 'ㅌ노래순위',
        description: '실시간 노래순위를 알려줘요'
    },
    {
        header: 'ㅌ실검',
        description: '실시간 실검을 알려줘요'
    },
    {
        header: 'ㅌ뉴스 [검색할 뉴스]',
        description: '뉴스를 검색해요'
    },
    {
        header: 'ㅌ투표 [주제] [시간;예)1h3m10s] [선택지1] [선택지2]...',
        description: '투표를 진행해요'
    },
    {
        header: 'ㅌ웹 [검색할 주제]',
        description: '네이버로 검색해요'
    },
    {
        header: 'ㅌ카페 [검색할 게시글]',
        description: '카페에서 게시글을 검색해요'
    },
    {
        header: 'ㅌ한강(이미지)',
        description: '한강온도를 알려줘요'
    },
    {
        header: 'ㅌ자가진단가입 [이름],[생년월일6자리],[학교종류(이름X)],[지역명],[학교이름],[전화번호(결과통보용, 원하지않을시 "n"기입)],[비밀번호;4자리]',
        description: '자동자가진단서비스에 가입해요, 개인정보보호를 위해 DM채널에서 진행되요'
    },
    {
        header: 'ㅌ자가진단탈퇴',
        description: '자동자가진단서비스에서 탈퇴해요, 개인정보보호를 위해 DM채널에서 진행되요'
    },
    {
        header: 'ㅌ내자가진단정보',
        description: '가입한 자가진단의 정보를 확인해요, 개인정보보호를 위해 DM채널에서 진행되요'
    },
    {
        header: 'ㅌ문자거부',
        description: '자가진단결과 수신을 거부해요'
    },
    {
        header: 'ㅌ문의 [내용]',
        description: '개발자에게 문의해요, DM채널에서만 사용가능해요'
    },
    {
        header: 'ㅌ출석체크(출첵,출쳌) [기록,목록(선택)]',
        description: '출석체크를 해요, "기록"이나 "목록"까지 포함해서 명령하면 지금까지의 기록을 볼수있어요'
    }
]


export default commands;
