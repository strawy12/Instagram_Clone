import React from 'react';
import "../styles/footer.scss";

function Footer():JSX.Element
{
    return (
    <div className="footer">
        <ul className="links">
            <li>소개</li>
            <li>도움말</li>
            <li>홍보 센터</li>
            <li>API채용</li>
            <li>정보</li>
            <li>개인정보처리방침</li>
            <li>약관</li>
            <li>위치</li>
            <li>언어</li>
            <li>Meta Verified</li>
        </ul>
        <div className="copyright">© 2023 INSTAGRAM FROM META</div>
    </div>
    );
}

export default Footer;