import React, { useState } from 'react';
import { FaStream, FaAngleDown, FaTimes } from 'react-icons/fa';
import logo from '../assets/logo.jpg';

const Header = () => {
  const [toggle, setToggle] = useState(true);
  const [oneArrow, setOneArrow] = useState(false);
  const [twoArrow, setTwoArrow] = useState(false);
  const [threeArrow, setThreeArrow] = useState(false);
  const [fourArrow, setFourArrow] = useState(false);
  const [fiveArrow, setFiveArrow] = useState(false);

  const toggleHandler = () => {
    setToggle((prev) => !prev);
  };

  const ArrowHandler = (e) => {
    if (e === '1') {
      setOneArrow((prev) => !prev);
    }
    if (e === '2') {
      setTwoArrow((prev) => !prev);
    }
    if (e === '3') {
      setThreeArrow((prev) => !prev);
    }
    if (e === '4') {
      setFourArrow((prev) => !prev);
    }
    if (e === '5') {
      setFiveArrow((prev) => !prev);
    }
  };

  return (
    <div className="flex justify-between sm:justify-evenly items-center px-4 py-6">
      <div className="flex items-center">
        <img
          className="cursor-pointer rounded-full w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 xl:w-14 xl:h-14 "
          src={logo}
          alt="logo"
        />
        <span className="cursor-pointer font-bold">삼성영어셀레나</span>
      </div>

      <ul className="hidden md:flex">
        <li className="cursor-pointer font-bold mr-9">브랜드 소개</li>
        <li className="cursor-pointer font-bold mr-9">프로그램 소개</li>
        <li className="cursor-pointer font-bold mr-9">학원 찾기</li>
        <li className="cursor-pointer font-bold mr-9">커뮤니티</li>
        <li className="cursor-pointer font-bold mr-9">가맹안내</li>
      </ul>

      <div className="flex items-center">
        <button className="cursor-pointer text-xs w-[7.5rem] font-bold bg-[#5AC4BE] rounded-3xl py-3 px-3 mr-4">
          이러닝센터
        </button>
        <FaStream
          onClick={toggleHandler}
          className="cursor-pointer md:hidden  hover:scale-x-150"
        />
      </div>

      {!toggle && (
        <div className=" absolute left-0 top-0 flex w-full h-full ">
          <div
            className="bg-black opacity-70 w-full h-full"
            onClick={toggleHandler}
          >
            <div className="float-right p-5">
              <FaTimes className="text-2xl text-gray-300 cursor-pointer" />
            </div>
          </div>
          <div className="bg-[#FFFFFF] w-[600px] cursor-pointer">
            <div className="flex items-center p-7">
              <img className="w-8 h-8 mr-2" src={logo} />
              <span className="font-bold text-lg">삼성영어 셀레나</span>
            </div>

            <div>
              <div>
                <div className="flex justify-between items-center mx-[1.75rem]">
                  <span className="font-bold text-xl py-[1rem]">
                    브랜드 소개
                  </span>
                  <FaAngleDown
                    className="text-gray-400 text-lg"
                    onClick={() => ArrowHandler('1')}
                  />
                </div>

                {oneArrow && (
                  <ul className="bg-[#F0F4F5] p-[1.75rem]">
                    <li>브랜드 소개</li>
                  </ul>
                )}
              </div>

              <div className="">
                <div className="flex justify-between items-center mx-[1.75rem]">
                  <span className="font-bold text-xl py-[1rem]">
                    프로그램 소개
                  </span>
                  <FaAngleDown
                    className="text-gray-400 text-lg"
                    onClick={() => ArrowHandler('2')}
                  />
                </div>

                {twoArrow && (
                  <ul className="bg-[#F0F4F5] p-[1.75rem]">
                    <li className="my-[0.8rem]">Evaluation</li>
                    <li className="my-[0.8rem]">수업 시스템</li>
                    <li className="my-[0.8rem]">커리큘럼</li>
                    <li className="my-[0.8rem]">선생님 소개</li>
                    <li className="my-[0.8rem]">영어실용능력평가 TOECA</li>
                    <li className="my-[0.8rem]">3분 설명회</li>
                  </ul>
                )}
              </div>

              <div className="">
                <div className="flex justify-between items-center mx-[1.75rem]">
                  <span className="font-bold text-xl py-[1rem]">학원 찾기</span>
                  <FaAngleDown
                    className="text-gray-400 text-lg"
                    onClick={() => ArrowHandler('3')}
                  />
                </div>

                {threeArrow && (
                  <ul className="bg-[#F0F4F5] p-[1.75rem]">
                    <li>학원 찾기</li>
                  </ul>
                )}
              </div>

              <div className="">
                <div className="flex justify-between items-center mx-[1.75rem]">
                  <span className="font-bold text-xl py-[1rem]">커뮤니티</span>
                  <FaAngleDown
                    className="text-gray-400 text-lg"
                    onClick={() => ArrowHandler('4')}
                  />
                </div>

                {fourArrow && (
                  <ul className="bg-[#F0F4F5] p-[1.75rem]">
                    <li className="my-[0.8rem]">셀레나 소식</li>
                    <li className="my-[0.8rem]">이벤트</li>
                    <li className="my-[0.8rem]">명예의 전당</li>
                  </ul>
                )}
              </div>

              <div className="">
                <div className="flex justify-between items-center mx-[1.75rem]">
                  <span className="font-bold text-xl py-[1rem]">가맹안내</span>
                  <FaAngleDown
                    className="text-gray-400 text-lg"
                    onClick={() => ArrowHandler('5')}
                  />
                </div>

                {fiveArrow && (
                  <ul className="bg-[#F0F4F5] p-[1.75rem]">
                    <li className="my-[0.8rem]">성공 포인트</li>
                    <li className="my-[0.8rem]">가맹 절차/신청 문의</li>
                    <li className="my-[0.8rem]">사업 설명회</li>
                  </ul>
                )}
              </div>
            </div>

            <div className="w-full text-center mt-10">
              <button className="w-[90%]  font-bold bg-[#5AC4BE] p-4 rounded-full">
                이러닝센터
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
