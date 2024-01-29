import { Link } from 'react-router-dom'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



// import required modules
import { Autoplay, Pagination } from 'swiper/modules';

const About = () => {
    return (
        <>



            {/* main */}

            {/* image */}

            <img className='mb-5' style={{ width: "100%", height: "70vh" }} src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBYWFRgVFhUYGRgaGhoYGBoYGhoYGBgYGhgZGhgYGBgcIS4lHB4rIRgYJjgmKy8xNTU1GiQ7QDs0Py40NTEBDAwMEA8QGhISHjQkIyE0NDQ0NDQ0NDQ0NDQ0NDQ0NDQxNDQ0NDQ0NDQ0NDQ0NDQxNDQ0NDQxPzQ0NDQ/NDQ0P//AABEIAKgBLAMBIgACEQEDEQH/xAAbAAACAgMBAAAAAAAAAAAAAAADBAIFAAEGB//EAEIQAAIBAgMFBAUJBQgDAAAAAAECAAMRBBIhBTFBUWETInGRBjKBodEUFUJSkrHB0vAHI6Ky4RYXM1RiY4KTJHKD/8QAGAEAAwEBAAAAAAAAAAAAAAAAAAECAwT/xAAfEQEBAQEAAwEBAAMAAAAAAAAAARECEiExA0FRYYH/2gAMAwEAAhEDEQA/ACYRusvMNVFpzOEeXGGfScXTujoaNaOI95TYV+stKbaQieoa4b5inWBQ6wosDcy0WCXtIF4OqbyJitGNtrMRNdZoGGpjnHBWBZjqDNkwdjeUlB0tMVYbJIsLSbFQvVe0VdjGKg1kcszu2rnoqFhaV+c2AeUYpU+kfIreS0gVhmkFXjNNQCacEyRuoINhJpwoacXqiPOYlWMWGRqmLOkecayBp3MuegUWl0jK0YZaFpuu4USb0eAVbDxlNtCtlB1jGJxosZRYirnhDL1XubxapG+zmnoc5aS9NYVkkkSHdNI4mq+qnKDNOO5ZpqcZYTVJPs4yKUn2cVpyGMDVud8vcO05nDNrLzCPeR1F81f4Z5b0X0nP4euBLbDVryDqwV5O8BmklaPSwSbUc5EtMTdFoxtd8YUwGWYTKlxNgxcXmw4ggPbCokqVOCAyDSYg6m6FELPvk6aCYi6w6U+MiRVrXZiYUhCZoLNMToNpsJD5INmhhl3ECRCVakTdzJw4jWeJnWGZSTD0sNeP4CqUiYyuHsI32YAiWJxYAk2iAYmoFEocbib310/XvksfiidIiWJElchV23wJsYyaBMCtDhLhVoqIZaem6YtDWHU2Eoij07QZN4zVECKcZBZZsiMJSvMr07CK05CgccYF3F5CtU4RN6hvFJo3D2HOstsO4lHTaxljhn1j6HK8o1Fv+ry3w1Sc1SbUWl1hW0mVaYuKbkxim0SoNGUcCSRsySiBR4KptFVNt5k9dc8/T5466+HSTMFophtoo5Cg2PL+sfpoJpz1LNiOubzcqSiEhEA5TbLLkRUBNhJITd5XpIQUCazQpWRCARXVNCSEiXtAvUjCVSpFneaLk7po0zJAZ1NoM0bndHEowpAEc/2C9PDWmVKgWaq4jlK7E4iK05EsRiCZU4p7m0I9ckROo8m1chOtTvBqnCMWJmqdAkwkFqS0RBNRFyY+KdhFnQ3+6WRRlkkoaR1MP7ZjU4yIdlNrSuY6mHhClorTkKdnaV+PqgCNbRxaoN85bF4pnMUmi+gsRXuTIBZKnSjHZy0CIIxQMRVyd0IiEnUxVUX2GqKJZUcVynPU0A4nzj2HYTOxcdHQqE7zG6dXeJVYZwZZUgLWiwDtiVykXsbaTlNpY8q2vE+J8pZYlyCw43sLQOGwtN3zuFbS+oBGlhuOnOYdceXW10cdePNMbALVKmi6KQCT5/1nT7VqlEuOt7dBfSV3o/XpIWp6A5iVNrDXTKOtrfoToKyK6kMLjjfh16GaziXmyVh13fKWx57iNsOt2VyLbiDx/V523o9tM16AdhZgSrcri2o9hE5/BehysXao72zHIFsLDS+bTVuHC1us6nCYVKSKiLZR7+ZJ4nrH+fF5H6/pz18NKZK4ghukC01jEStWAEWFUmbKXMIlOP6AXJmBCYYgCRzQLWhTAmaTTtIM0VGJ1KtolVq3mVWvAM0i1cjGldjBpHXbTSKOTutGcJZYHKCY46c5Fktu8v1viw9DSmOX9JDJa9o1SQn9fr3QwoRwFqVO4m2oiPpShFpCUgjSwx4zdSiBHm0ieIqWitOFmEp9q7SVBYatykdq7WAOVdT7hKB1Z2u3GEhl6zO7XJhFohYYrY6CDqE85ZYGx5TIMvCodItIqjGM0SYuKoh0rLGUOqnWO4el1ldTqDnLLD4gbpPUXzVvgxpLWiJVYSuJZUq4knUKgVSdDr47zx6ysrJ3ha9tbnda3D7/ADlm1YEuxHq6DpaKVD3S19Tf2zLv56a8ffZPE7Q/1WsPZpuEZ2R6Ssrsjm6EaA6lbWza79RfScrtiiLByxVr2ItoQSdRyG7fLDZG0FD5sl8gNlFrC28sdNTY+cn8/wA8960/TuWWY9SwWKDoCL2sNTpc8dJHEYrLONwO2WazgVPZY6a8BfSdLhqvaLcrb9cuBm+uS84HU2qwP9JEbY4W8pV47E/vFRChVmyk3Op4hSNLjrMxZRL5nHdF8oIDEDkOu68XnKfiucRt6nSTM+/6Kjex6dOplC3pNia7WooqDoMxHizae4SnweHfE1Ltu48lUbgJ2+BwKooVVsBJvVoyRXYRcXvesD0yJ9+US3pO/wBID2fCGy2mrwlsF9oFoGo8cq0sy3G8e8SveVpSI5hBuYRU0m+zhFFwuk06dLxtKYk2SNKsekd58oanh48tEcpMraA0oKEmtMCTducEKsNGN1CIHtJGvWlZiMVbcYHIaxOKC7zKDH7QLXAkMTiCTFuzvAYUSkSbwwTpGhR0kekrQQrG0rqktsQgldUAiGFlS5uYwiC0gBCZukoK7spIUo0lOSROkaAUQx2iSOMilONJRiqoawzmWlFzziNClHqSiRVQ9TW+nPfC19nh1y7vCQwyi8s6FpPo/cclt/YQCXFzl7x1sSL94eVtOkp/RjACpXZQCVCFiL6HvKO9ffvnou0MKXQ2HCc16DUOzxNZXFmyd0HiM+tvdFPqt3l0eGwhClcotfQ2sbfhpNY/GuijKgAuRffoACNAN+/ylqTeYrrbeDY2PGxHPlDrm35cZ65mljFc9rTVAyZsylmCNmyjMthv132ldtjG0aqq6d1mPfsLm4GgB3Ea3g/ShxQLZAq9o41AAYDS4vxB00PKIVhpbKwsdOu6x11mclaZHW+jFAIh3HXeOmk6JXBGk89wGNZLWJAnTbOxWdrq+vEcGHMdZXxFi6ZpDNNEwlGiWvqBbnD6Q2EbWUmNxSo7qdysR8IxtDbCYbVlLnkpUfzGc/8AK1xDPVF1DMe6bXHQ203Sp6Em1YptZDu1jdOtm6eMQq0FUUwq/QB04ks5Jm0qWjlPF0s0WERoV7kAxHAbWd69emVULSKqDrdibk3j0vFfs0Xd4FsTEsRiuUQkNGrFMTiVXx/XCJ9ueGnU6xLEHjck8zA8Hr4omIVHvpDLTJhkw9pQIJQJMMtHLrHctphQEboAjeK1d+keqC0RqmxMASqEnSCSjrrGWcE2Am7C2nnCCg9gIs7gG2kZqPYWla7aytIYMOYhFcc5SBzDJVIlEvEMPTeUaYk84ZMUecmw46Ok4tGkqAcpzKYwwi4wybDldhhsQLb47h8SJxdDGmOpjjpJxXp1mJ2qVWwB904rGbaqCsrggZSPoqCRfUXA3EaSWJ2y1iCBKUv2jqi6s7AAD3nwAufZM5brTJI9g2cQwZ3uQp0A89Zzm2fSWkjuVpsLHM5zCxIGpC87AcRLbZlU5HUjWwYeG4/hOGx1FXxKUXItUqDMCwF0Buw8hu47pe+8ZTn7as9t08M1PtszvmbOrB1sDwXKRYDS1pVYramezkWHEb7eEvtl7PRP8fEWym2VblCoOndAtY8rQTJg0xF1qKtO9wMhNibEhVYEWJJ4aW8JMqrYQwGEepdkF0Gpa4Cgb95MuaGBenYlrXsQeB5WMc25tSguHqBFQ27rWUC97jeBy90pKfpVQCIrMEFgTclmB8TrbgIe78Lcnt2GHqEjXfLHCaBjblw8ZWbFZKyCpTdXQ7mU3FxvB5EcjHMbXCLZWF+IGsJ691N9+nKelwzG2U+OUafwyp2K4VGUG/evqLbx4dIXbO0QWLOwAG65lNTx+pNjY7tDuiltrTxyPRdkVDcOVItSyqWBAJLXuCehlTXcB2u24+f9PhGtlYoVKNIEggWDDjZdbeQnM7RxoarUcLl71hpvAFr2ky29DM11my6ZqNp6q2zHkOXiZUbSqrRxT8BWsT0cDKPYRb2x70KqhqVYs2WzAXP/AKyk9I2piqe4SylcrOdGLAsO6CO6Lb9fhV69lzN2LJ31ALBbkC5NhrzvFto4kJUyBHKW/wAQghSeAF/Wv0msJt6uqIMmHIY8Bms9vVJJIzW5TNp7eqEd/Jbf6qfiDHeoJzRGpEwqYScnX9KqzsKaO7sdAqanyUaD3Tpdk4fEaPiKpJ4UxbKNPpNbvHw980nv+Ivo32IE1lh3cRd3vGAa5AkCTaEamOMHWqAaQBat+uZlVilJJsDLQrfU8P1vga7hRJVPStWnYXJi1at5QNeuXbf3R7zFqkcKp1cTeL9t0mZZrs4yAWmZMIY4jiEUiaJIimZNaZlgoWHRBFpkKeHMZTDGPU0EZULJtOQnhsKSd15aLtp6BCrgg1xfMiO9+ha97wmGdVllsr97VVOBNzb6o1P66yc36duGNg4MY4mpWwNJEGmarT7724KCb26nTxnQp6N4GmbrhaAPMU1B87R58QEWwsABYdBOb2vt5UB7wmsknxjb11VjiFoUwSlOmpsRcLb2XGtp5ztXbWGp1SKmBRn3hru4YcCpzSeO227nfYStxlNaqgOTobgjeOY14fCR1zPrTnflCx22cPUNzQqC/BalQDyzwNCvhFuThWe+/Mzt7meYNmoNzt/D8Im/dNvv0kbf408Z/V0m1cKNPkA0vvNS388yrtDCNlJ2emlz6r66EWY57mVCVV6g8j+BllhqCOL5mvxFx8Itpznlc4T00FJAiYbKiiyqA+UDkBnjS/tBfhQA8VP55SHA0/rP5r8IRNm0z9J/MfCTafjyZf0wQm5wNEnmaKk+eaSHpoBuwdEf/JfzxR9l0/rP5j4QB2cnAt5j4Q0ePKw/txrf5HSvz7Jb6dc8GPTMDdgqX/Un5ooNmJzbzHwhF2Mh4t5j4Q/4M5MP6bsVK/JUAOhsir9zytrbdpsAGwzHxeoTbdv7W9o4NhpzbzHwnLV3YYg0VtbtMgvv9a2pjk3+DZF6Nu01XKMP3SQ1szmxG4gmpdd/C0JWrCqoc4HOCLgl31HtqxqrsSkypoRfUkNqe7fUm/uhu0ygKlsoFh7OAjl/pWKqjSNO5p4MoTvK1HW9uBtVllgNpVxcGmUGnruzk87Xdrf1m+0biIvUrEE++PyheK9Taa/S7vU6DzjPbpvvecotb9HfBLtfsPWAZDqMwFwdeP4E+yLf8DxdY9flFC19YjgseHNxexJtfS1rd21tPMzdetHKWDVK2UGVGJrM+nD8IStULaSKC2+PRgApgCL1YxiG13RfLDRgYpyfZySCSsY0k1k1MCphVE0SIjxhHivsjFNpFpw0jwyPeKow5whxSAcfG8jrqRpz+d6+HQ3WXXopiAKza69mbfaW85xHB4mw1uOPhNUcUKTh0JG8EE7xxtyI08pnf0zqRtPx3m12e2ts5QdROHxmKeo1zH3c1Tm4TBhQOE183P4K1EMI6WU+Ebeyyvx+KGUi+/T4w3RmK7D4vnG2KOO8PLfKmowmJibcY8LTNfDldRqOfGZSdhqpkRjBzgmxQ4aQwataG0Oe+WVOvcXnI1cUDC0doESbyqdOr7WaauBvMok2lpAV8ex3GHifkvmx6iZS2uZyr4gneZuliLR4nyd3S2gpHWcM1X/zs3+/f+OP0dpAcJQVa374t/rzfxXlcz3St9PU8en7lG4dw794KmVz1bbrCH2hVJ2cjceypNfwKg/jOVwuPdiFVWduCoGZjz7q3JmU51fli9epm9ZvLdCLSQ9f1ykcLsDEPT7Y08i7wHbIx6hDqPbaWuxNh56fauzKLkKq6k5SQSfaDoOULMPylUTuFPDwHHxjKY1QtiAdOIG+Lv6P4jEVmWnTIC6l3uii+69xe+h0AMrNs7Oq4c5XZehU5l89DL55R103tFkBDIACCDYXXdu1Euam0UZGqWykBTa1792x1GgF7eY4GcPisS6HUXHA9eU6T0QqozlK9ijhQQSRoDfKbcD8I+uMmjnrfRmrjF4XPhBriRyMvtsYTCUtadBLnmXK/ZLWnH7TxGV7gAXubKMoG7csie/ityezlSoL7jAtUIMUp178ZJiTAzqPJdqIkgI5xynQYi/lpwlamxNdnL1+03xhfm9Rz+0Y4JJkBBB3H2e+aM/SvbBqN7W6XJY+AvJJg0vq+XxYEn2DQHzj2GwdJd1NfK8s8O6LuUewCKnFT83ofVZ93I2vrrc6cvKc3iq5RsjWDA7jYT0injQIdccnFQfYJFm/WnPd5+OOwWzmajdGzPa+QEZvCwvr7ZU1sLXzWajWNuVN/cQs9RTaajdpDrtYc4vGbpz9eo4TC4WvTp5lpVGULcqUqZ83JVybvbK7Gbaq/wCXrL4ow/CepJtdOcIu2E5++VJz/Yz666rw+ptWqx9Rx4qfhJIzt9Bz7DPbxtdDyhF2knT3R2z+Jm/14kuy3b6FvFiIan6PVDuQfab8BPbF2inT3TfzgsR68iwnoXianqIP+TOo82W0bH7OsWfoU/8As/pPUxj15yXy1ecBrzBP2Z4g+s1Jf+bn8JP+7Kt9ej51PhPTPla85o4sQGvNP7uMQNzUftP+WaP7OsTzo/af8s9L+VCZ8qEBrzM/s6xHOj9t/wAsif2dYjnR+2/5Z6Y2KWQ+VrFo2vMz+zvEc6P23/LF2/ZliM2bPT33tna38k9U+VrNjFLCdWC+3HVtgVxhFw2QMwQpcMMvrkjVrHdbhIbB2e2Aw9VnQCo7AAqcxyBRZc3DXMfKdt8rEDXyOpV1VlO8EAg+IMR7/lxWxNud+otZgRlZ1VtVzXFwBxNuEFgPSZUeoCNHF1toqkfRA3C4/lnTPsPCf5elpu/dr8Jr5kwliPk9Gx39xNfdJ8Zp+Uz44dPSV6dR3z6OpXJfTobcxz6mV1au2JzgMjORfvOqKNRxY2noZ9H8F/l6H2E+ExNjYRd2HpDwRR+E0lkJ51hvRfEkWIpG/wDuofuh6PoPjFYOGpjoWOo5aCejLh6K+rTQeCqPwh+1EPKljhKno9jiNRSJ59o35ZD+y+IK5Xp0W5kvr7DluPZO8NXpImt0ilz4Lbfrzr+xuJU90U7fVZyR4bvut1vLJNh1FFjh6ZI4ioBf+Cde1XwgmqeEdtokclW2XXB7lFF3b2puBzI7gMcp4R7d6kL9Gp2/l08JetUkM4/RitEjkhVkxVmTJoSYrSYrTJkAkK0kK/WbmQDBiOsl2/UTJkRtGt1mu1POZMgTYrHpJCuecyZAJriW5yYxbfWmTIgIMe3OSG0X5zJkeBv50bpNjazTJkWQ0vndpo7WbnMmR+MCDbTb60iNon601Mk4aY2qfrTPnc8/vm5kCb+dzz++Ydqn60yZA0TtU/WmfOfWbmRYSPzj1++aO0+v3zUyPCR+dTzHnInap5j3zJkA0dqHn98g20z9aZMjMNtqN9aQO025zUyAYdpNzkfnEzJkYf/Z" alt="" />
            <Link to="/Watercontainer" className='nav-link'>

                {/* swiper */}

                <Swiper
                    slidesPerView={5}
                    spaceBetween={30}
                    autoplay={{
                        delay: 2000,
                        disableOnInteraction: false,
                    }}
                    modules={[Autoplay, Pagination]}
                    className="mySwiper mb-5 "
                >
                    <SwiperSlide>
                        <Link to='/Showpiece'> <img src="https://i.pinimg.com/564x/2c/14/8c/2c148c7d3eba6c99717d6d3b8a1f9cee.jpg" style={{ height: "220px", width: "220px" }} alt="" />
                        </Link>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Link to='/Showpiece'>
                            <img src="https://i.pinimg.com/564x/c5/15/69/c515691c6d011d10aff6adbb31966255.jpg" style={{ height: "220px", width: "220px" }} alt="" />
                        </Link>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Link to='/Showpiece'>
                            <img src="https://i.pinimg.com/564x/b7/fc/24/b7fc24fa609776d555583d7d0c639f32.jpg" style={{ height: "220px", width: "220px" }} alt="" />

                        </Link></SwiperSlide>
                    <SwiperSlide>
                        <Link to='/Showpiece'>
                            <img src="https://i.pinimg.com/564x/f4/d7/37/f4d7371dac96cc99d27216b164f26667.jpg" style={{ height: "220px", width: "220px" }} alt="" />
                        </Link> </SwiperSlide>
                    <SwiperSlide>
                        <Link to='/Showpiece'>
                            <img src="https://i.pinimg.com/564x/49/7c/b6/497cb64981ca53aa8184c6027482f1ac.jpg" style={{ height: "220px", width: "220px" }} alt="" />
                        </Link> </SwiperSlide>
                    <SwiperSlide>
                        <Link to='/Showpiece'>
                            <img src="https://i.pinimg.com/564x/ae/4d/f6/ae4df69e0d1cef169e2c48a0af2b8fed.jpg" style={{ height: "220px", width: "220px" }} alt="" />
                        </Link></SwiperSlide>
                    <SwiperSlide>
                        <Link to='/Showpiece'>
                            <img src="https://i.pinimg.com/564x/ca/11/39/ca113928fee8288a876b3fd895aac2da.jpg" style={{ height: "220px", width: "220px" }} alt="" />
                        </Link></SwiperSlide>
                    <SwiperSlide>
                        <Link to='/Showpiece'>
                            <img src="https://i.pinimg.com/564x/fd/52/eb/fd52eb52e2ecbe0dffd82456e36c9b8a.jpg" style={{ height: "220px", width: "220px" }} alt="" />
                        </Link></SwiperSlide>
                    <SwiperSlide>
                        <Link to='/Showpiece'>
                            <img src="https://i.pinimg.com/564x/e8/60/4c/e8604c445e16d1d766a27b0565c6263f.jpg" style={{ height: "220px", width: "220px" }} alt="" />
                        </Link></SwiperSlide>
                </Swiper>

                {/* our story */}
                <div className="container mt-5 p-5 mb-5 bg-dark bg-opacity-25">
                    <div className="row shadow">
                        <h1 className="text-center mt-4 p-2 mb-4 bg-dark bg-opacity-25 about-text fw-bold" style={{ fontFamily: "serif", letterSpacing: "2px" }}>OUR STORY</h1>
                        <p className="fs-5 px-5 text-muted" style={{ fontFamily: "serif" }}>
                            Welcome to MittiMahal, where we bring the magic of mud to your doorstep! Our online store is like a treasure chest filled with amazing things made from earthy goodness. From cool clay pots to unique mud creations, MittiMahal is all about celebrating nature&apos;s beauty. We love how talented hands can turn simple mud into fantastic art. Our collection is a mix of timeless traditions and cool, new ideas that are good for the planet. So, when you shop with us, you&apos;re not just getting stuff  you&apos;re getting a piece of history, a touch of nature, and a whole lot of smiles. Let&apos;s make your shopping experience as awesome as the mud we adore!</p>

                    </div>
                </div>

                <Swiper
                    slidesPerView={5}
                    spaceBetween={30}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    modules={[Autoplay, Pagination]}
                    className="mySwiper mb-5 "
                >
                    <SwiperSlide>
                        <img src="https://i.pinimg.com/236x/aa/79/14/aa7914221888f2bd1609c40467c8a1a9.jpg" style={{ height: "220px", width: "220px" }} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://i.pinimg.com/236x/8b/ed/e8/8bede8382fd79fa1ef567ab4f944bfbe.jpg" style={{ height: "220px", width: "220px" }} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://i.pinimg.com/236x/8b/f6/25/8bf6254bf3b89bf8bb589048ba5e7b4f.jpg" style={{ height: "220px", width: "220px" }} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://i.pinimg.com/236x/a1/01/82/a10182529ddfb5d7842f77d22a783980.jpg" style={{ height: "220px", width: "220px" }} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://i.pinimg.com/236x/75/79/75/757975cf0de7956448c9c54c2cd1c45b.jpg" style={{ height: "220px", width: "220px" }} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://i.pinimg.com/236x/6d/55/c1/6d55c13cc68f3f59288f893202d85833.jpg" style={{ height: "220px", width: "220px" }} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmhaw8hfCRqBrKXBjsNk-rW37RPJGKk5YnGQ&usqp=CAU" style={{ height: "220px", width: "220px" }} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGbFqGwWk0w3icb9PFBtmnmoLzftVaOx5otA&usqp=CAU" style={{ height: "220px", width: "220px" }} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://i.pinimg.com/236x/c5/37/e5/c537e5d249608fe83c733360fc96615c.jpg" style={{ height: "220px", width: "220px" }} alt="" />
                    </SwiperSlide>
                </Swiper>
            </Link>







            {/* what we do for you */}

            {/* left */}
            <div className="container mt-5 mb-5 bg-dark bg-opacity-25 p-5">
                <div className="row p-5 shadow">
                    <div className="col-md-6 p-3">
                        <h1 className="px-3 mb-3" style={{ fontFamily: 'fantasy', letterSpacing: '1px' }}>WHAT WE DO FOR YOU</h1>
                        <p className="px-3 text-muted" >
                            At MittiMahal, we&apos;re here to make your shopping experience special! We have a bunch of awesome things made from mud – from classic stuff to cool new ideas. Everything is crafted with love and care. When you shop with us, you&apos;re not just getting things; you&apos;re getting unique items that tell a story. Our products are good for the Earth, and they bring a touch of nature to your life. So, if you want something handmade, eco-friendly, and full of charm, MittiMahal is the place for you! Let&apos;s make your shopping fun and meaningful. </p>
                        <Link to="/Shop"><button className="btn btn-success px-3 mx-3 mt-3 fs-5" style={{ fontFamily: 'cursive' }}>Shop Now</button></Link>
                    </div>


                    {/* right  */}
                    <div className="col-md-6">
                        <div className="row mt-3">
                            <div className="col-md-6   d-flex align-items-center justify-content-center flex-column">
                                <i className="fa-solid fa-truck-fast fs-4 mb-2 "></i>
                                <h5 className="" style={{ fontFamily: 'serif' }}>FREE SHIPPING</h5>
                                <p className="text-muted" style={{ fontSize: '12px', fontFamily: "cursive" }}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi nisi quod quisquam quam et rerum repellat.</p>
                            </div>
                            <div className="col-md-6 p-3  d-flex align-items-center justify-content-center flex-column">
                                <i className="fa-solid fa-money-bill-transfer fs-4 mb-2"></i>
                                <h5 className="" style={{ fontFamily: 'serif' }}>100% MONEY BACK </h5>
                                <p className="text-muted" style={{ fontSize: '12px' }}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi nisi quod quisquam quam et rerum repellat.</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6 p-3  d-flex align-items-center justify-content-center flex-column">
                                <i className="fa-solid fa-spa fs-4 mb-2"></i>
                                <h5 className="" style={{ fontFamily: 'serif' }}>PLANT CARE TIPS</h5>
                                <p className="text-muted" style={{ fontSize: '12px' }}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi nisi quod quisquam quam et rerum repellat.</p>
                            </div>
                            <div className="col-md-6 p-3  d-flex align-items-center justify-content-center flex-column">
                                <i className="fa-solid fa-walkie-talkie fs-4 mb-2"></i>
                                <h5 className="" style={{ fontFamily: 'serif' }}>GARDENING SERVICES</h5>
                                <p className="text-muted" style={{ fontSize: '12px' }}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi nisi quod quisquam quam et rerum repellat.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Link to="/Utensils" className='nav-link'>

                <Swiper
                    slidesPerView={5}
                    spaceBetween={30}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    modules={[Autoplay, Pagination]}
                    className="mySwiper mb-5 "
                >
                    <SwiperSlide>
                        <img src="https://i.pinimg.com/736x/a9/dd/a6/a9dda634fc2169bb6896822b66ba819c.jpg" style={{ height: "220px", width: "220px" }} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://i.pinimg.com/564x/a1/b2/2d/a1b22db72c86c76205e82d5a37c352ed.jpg" style={{ height: "220px", width: "220px" }} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://anuna.com/images/detailed/48/dahi_handi_designn.jpg" style={{ height: "220px", width: "220px" }} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://i.pinimg.com/236x/4f/ce/42/4fce42ced4b1abb0c415f623a05c3aa1.jpg" style={{ height: "220px", width: "220px" }} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://rukminim2.flixcart.com/image/1100/1300/knj7wcw0/cup-saucer/q/z/5/large-cup-glazed-all-desi-original-imag26w9whnhuesf.jpeg?q=20&crop=false" style={{ height: "220px", width: "220px" }} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://th.bing.com/th/id/OIP.TediLQR6bzpTaW__0FHXgAHaFU?pid=ImgDet&w=182&h=130&c=7" style={{ height: "220px", width: "220px" }} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://th.bing.com/th/id/OIP.fze3Gxz9rQUihPxItRpANgHaHa?pid=ImgDet&w=182&h=182&c=7" style={{ height: "220px", width: "220px" }} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://th.bing.com/th/id/OIP.xeLYNewtPJlaOuFtcfd1agHaHa?w=159&h=180&c=7&r=0&o=5&pid=1.7" style={{ height: "220px", width: "220px" }} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://th.bing.com/th/id/OIP.vmWoFdeVsSnP6NUopKkDQwHaHa?w=169&h=180&c=7&r=0&o=5&pid=1.7" style={{ height: "220px", width: "220px" }} alt="" />
                    </SwiperSlide>
                </Swiper>
            </Link>

            {/* kind words */}
            <div className="container mb-5 p-5 bg-dark bg-opacity-25">
                <div className="row shadow ">
                    <div className="col-">

                        <h1 className="text-center mt-4 p-2 mb-4 bg-dark bg-opacity-25 about-text fw-bold" style={{ fontFamily: "serif", letterSpacing: "2px", textTransform: "uppercase" }}>Kind words from our clients</h1>






                        <Swiper
                            slidesPerView={3}
                            spaceBetween={30}
                            pagination={{
                                clickable: true,
                            }}
                            modules={[Pagination]}
                            className="mySwiper mb-5"
                        >
                            <SwiperSlide>
                                <div className="card about-swiper-1 m-2 shadow-lg bg-dark bg-opacity-25">
                                    <div className="card-body">

                                        <img src="https://img.freepik.com/premium-photo/happy-successful-adult-businesswoman-formal-outfit-stylish-glasses-smiling-looking-while-standing-with-arms-crossed_251859-2390.jpg?w=740" className='img-about-swiper' alt="" />
                                        <h5 className="text-center mt-4 name">Charlotte</h5>
                                        <p className="text-center ms-3 mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic officiis autem quibusdam quidem, nemo dolorem commodi earum placeat eaque accusamus. Possimus consequatur, esse explicabo mollitia porro perspiciatis deleniti soluta ipsum.</p>
                                    </div>

                                </div>

                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="card m-2 about-swiper-1 bg-dark shadow-lg bg-opacity-25">
                                    <div className="card-body">

                                        <img src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?w=740&t=st=1700030073~exp=1700030673~hmac=8b9bef272a9c5b4bf79e12e7a0d22037c687d48287b84121b9940c547e332cd7" className='img-about-swiper' alt="" />
                                        <h5 className="text-center mt-4 name">Jackson</h5>
                                        <p className="text-center ms-3 mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic officiis autem quibusdam quidem, nemo dolorem commodi earum placeat eaque accusamus. Possimus consequatur, esse explicabo mollitia porro perspiciatis deleniti soluta ipsum.</p>
                                    </div>

                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="card m-2 about-swiper-1 bg-dark shadow-lg bg-opacity-25">
                                    <div className="card-body">
                                        <img src="https://img.freepik.com/free-photo/young-female-put-glasses-looking-determined_176420-20746.jpg?w=740&t=st=1700030177~exp=1700030777~hmac=62b859c0e2afb49c0239d57220c380ae8fffb03899c917132d97af3f3a0a7da3" className='img-about-swiper' alt="" />
                                        <h5 className="text-center mt-4 name">Amella</h5>
                                        <p className="text-center ms-3 mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic officiis autem quibusdam quidem, nemo dolorem commodi earum placeat eaque accusamus. Possimus consequatur, esse explicabo mollitia porro perspiciatis deleniti soluta ipsum.</p>
                                    </div>

                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="card m-2 about-swiper-1 bg-dark shadow-lg bg-opacity-25">
                                    <div className="card-body">
                                        <img src="https://img.freepik.com/free-photo/cheerful-curly-business-girl-wearing-glasses_176420-206.jpg?w=740&t=st=1700030126~exp=1700030726~hmac=76423dba7ab8f09044c7f159f32ab7b7e8a2c1e1b435e58f5fb88b3f54123103" className='img-about-swiper' alt="" />
                                        <h5 className="text-center mt-4 name">Scarlett</h5>
                                        <p className="text-center ms-3 mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic officiis autem quibusdam quidem, nemo dolorem commodi earum placeat eaque accusamus. Possimus consequatur, esse explicabo mollitia porro perspiciatis deleniti soluta ipsum.</p>
                                    </div>

                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="card m-2 about-swiper-1 shadow-lg bg-dark bg-opacity-25">
                                    <div className="card-body">
                                        <img src="https://img.freepik.com/free-photo/portrait-young-man-with-dark-curly-hair_176532-8137.jpg?w=740&t=st=1700030210~exp=1700030810~hmac=1cd1b819771fee82733fe80d44dea6dba26f62b2761e75898acfe6e3b21b4dd9" className='img-about-swiper' alt="" />
                                        <h5 className="text-center mt-4 name">Lucas</h5>
                                        <p className="text-center ms-3 mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic officiis autem quibusdam quidem, nemo dolorem commodi earum placeat eaque accusamus. Possimus consequatur, esse explicabo mollitia porro perspiciatis deleniti soluta ipsum.</p>
                                    </div>

                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="card m-2 about-swiper-1 bg-dark shadow-lg bg-opacity-25">
                                    <div className="card-body">
                                        <img src="https://img.freepik.com/free-photo/handsome-bearded-guy-posing-against-white-wall_273609-20597.jpg?w=740&t=st=1700030247~exp=1700030847~hmac=5d748445e590f198c93c100df257d56d50ca8fc9de63a4e1cd342671c4d064b3" className='img-about-swiper' alt="" />
                                        <h5 className="text-center mt-4 name">Hudson</h5>
                                        <p className="text-center ms-3 mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic officiis autem quibusdam quidem, nemo dolorem commodi earum placeat eaque accusamus. Possimus consequatur, esse explicabo mollitia porro perspiciatis deleniti soluta ipsum.</p>
                                    </div>

                                </div>
                            </SwiperSlide>

                        </Swiper>
                    </div>
                </div>
            </div>



        </>
    )
}

export default About