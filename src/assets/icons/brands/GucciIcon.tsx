interface GucciIconProps
  extends Omit<React.ComponentPropsWithoutRef<"svg">, "children"> {}

let GucciIcon: React.FC<GucciIconProps> = ({ className, ...rest }) => {
  return (
    <svg
      width="157"
      height="34"
      viewBox="0 0 157 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...rest}
    >
      <path
        d="M141.794 10.2934L141.502 10.3855C140.369 8.04204 138.749 6.17651 136.644 4.78893C134.571 3.40133 131.964 2.70752 128.822 2.70752C127.073 2.70752 125.405 3.06211 123.818 3.77129C122.231 4.44972 120.838 5.42104 119.64 6.68525C118.474 7.91865 117.534 9.41416 116.822 11.1718C116.109 12.9294 115.753 14.872 115.753 16.9997C115.753 19.1273 116.109 21.0699 116.822 22.8275C117.534 24.5851 118.474 26.096 119.64 27.3603C120.838 28.5937 122.231 29.5496 123.818 30.228C125.405 30.9063 127.073 31.2455 128.822 31.2455C131.931 31.2455 134.458 30.783 136.401 29.8579C138.377 28.9021 140.045 27.4528 141.405 25.5102L141.697 25.6024L141.6 28.5626C140.855 29.3026 139.997 29.9656 139.025 30.5514C138.053 31.1065 137.001 31.5844 135.867 31.9853C134.766 32.3553 133.616 32.6328 132.418 32.8178C131.219 33.0339 130.021 33.1419 128.822 33.1419C126.328 33.1419 123.948 32.7564 121.681 31.9855C119.413 31.2146 117.421 30.1354 115.705 28.7478C113.988 27.3294 112.628 25.6335 111.624 23.66C110.62 21.6558 110.117 19.4356 110.117 16.9996C110.117 14.5636 110.62 12.3589 111.624 10.3855C112.628 8.38116 113.988 6.6698 115.705 5.25142C117.421 3.83298 119.413 2.75374 121.681 2.01369C123.948 1.24279 126.328 0.85734 128.822 0.85734C130.021 0.85734 131.219 0.949845 132.418 1.13486C133.616 1.31987 134.766 1.61281 135.867 2.01369C137.001 2.38372 138.053 2.86167 139.025 3.44757C139.997 4.0026 140.855 4.65013 141.6 5.39017L141.794 10.2934ZM34.7337 19.1277C34.3776 19.2817 34.0375 19.4822 33.7134 19.7293C33.3893 19.9758 33.2273 20.315 33.2273 20.7469V26.4359C31.6726 28.5636 29.6807 30.2133 27.2515 31.385C24.8223 32.5568 22.1339 33.1427 19.1865 33.1427C16.6925 33.1427 14.3119 32.7572 12.0447 31.9863C9.77742 31.2154 7.78547 30.1362 6.06882 28.7486C4.3522 27.3302 2.99183 25.6343 1.98774 23.6608C0.983707 21.6566 0.481689 19.4364 0.481689 17.0004C0.481689 14.5644 0.983707 12.3597 1.98774 10.3863C2.99183 8.38192 4.3522 6.67056 6.06882 5.25218C7.78547 3.83374 9.77742 2.75451 12.0447 2.01449C14.3119 1.24356 16.6925 0.858098 19.1865 0.858098C20.3849 0.858098 21.5833 0.950603 22.7818 1.13561C23.9801 1.32062 25.1299 1.61357 26.2312 2.01445C27.3648 2.38447 28.4175 2.86243 29.3891 3.44832C30.3608 4.00335 31.2192 4.65089 31.9642 5.39093L32.1588 10.2937L31.8673 10.3859C30.7337 8.04238 29.1142 6.17683 27.0089 4.78925C24.936 3.40165 22.3286 2.70784 19.1868 2.70784C17.4378 2.70784 15.7698 3.06245 14.1828 3.77165C12.5957 4.45005 11.2029 5.42136 10.0045 6.68557C8.83844 7.919 7.89917 9.41452 7.18667 11.1721C6.47405 12.9297 6.11774 14.8724 6.11774 17C6.11774 19.0968 6.45784 21.024 7.13804 22.7816C7.85063 24.5392 8.78993 26.0501 9.95594 27.3144C11.1543 28.5478 12.547 29.5191 14.1341 30.2283C15.7212 30.9067 17.4055 31.2459 19.1868 31.2459C22.5554 31.2459 25.438 30.6292 27.8348 29.3958V20.7465C27.8348 20.315 27.6568 19.9758 27.3007 19.7289C26.9766 19.4824 26.6527 19.2819 26.329 19.1273L26.3734 18.8963C26.5351 18.9245 26.8267 18.9553 27.2479 18.9885C27.6692 19.0167 28.1064 19.0475 28.5597 19.0807H32.7381C33.1268 19.0525 33.4993 19.0218 33.8556 18.9885C34.2117 18.9603 34.4869 18.9296 34.6813 18.8963L34.7337 19.1277ZM69.9237 1.82908C69.5996 1.98307 69.2757 2.18359 68.952 2.43065C68.6279 2.67714 68.4499 3.13967 68.4179 3.81822C68.3883 4.55827 68.356 5.49875 68.321 6.63967C68.321 7.74976 68.3062 9.01399 68.2766 10.4323C68.2766 11.8508 68.2618 13.3926 68.2321 15.0577V20.2381C68.2025 22.2423 67.9433 23.9537 67.4545 25.3721C66.9687 26.7905 66.3209 27.9776 65.5112 28.9335C64.7339 29.8895 63.8593 30.6449 62.8876 31.2C61.9483 31.755 61.009 32.1713 60.0697 32.4488C59.1628 32.7573 58.3045 32.9423 57.4949 33.0038C56.6851 33.0963 56.0535 33.1426 55.6 33.1426C53.7539 33.1426 51.9724 32.9113 50.2557 32.4488C48.5391 32.0173 47.033 31.3081 45.7375 30.3211C44.4419 29.3344 43.4055 28.0547 42.6281 26.4822C41.8508 24.9096 41.4621 22.9978 41.4621 20.7468V15.5203V10.7099C41.4621 9.22975 41.4473 7.90384 41.4177 6.73214C41.4177 5.52954 41.4028 4.55823 41.3732 3.81818C41.3436 3.13979 41.1656 2.67726 40.8391 2.43061C40.515 2.18411 40.1911 1.98359 39.8674 1.82904L39.9119 1.59806C40.0736 1.62626 40.3329 1.65699 40.6895 1.69025C41.0782 1.71845 41.4669 1.74918 41.8555 1.78243C42.2768 1.78243 42.6817 1.79653 43.0702 1.82473H44.8192C45.2079 1.79653 45.6127 1.78243 46.0337 1.78243C46.455 1.75423 46.8437 1.7235 47.1998 1.69025C47.5884 1.66204 47.8636 1.63132 48.0254 1.59806L48.0698 1.82904C47.7137 1.98303 47.3736 2.18355 47.0496 2.43061C46.7581 2.6771 46.596 3.13963 46.5634 3.81818C46.5338 4.55823 46.5015 5.52954 46.4666 6.73214V20.7468C46.4666 24.1078 47.2925 26.59 48.9443 28.1935C50.5962 29.7969 53.0416 30.5986 56.2806 30.5986C57.2198 30.5986 58.2887 30.4906 59.4871 30.2746C60.6856 30.0281 61.803 29.5347 62.8394 28.7945C63.9082 28.0544 64.799 27.0061 65.5115 25.6493C66.2565 24.2925 66.629 22.4887 66.629 20.2377C66.629 17.8017 66.6142 15.7204 66.5845 13.9936C66.5845 12.236 66.5697 10.7405 66.5401 9.50706C66.5401 8.24282 66.5253 7.16358 66.4957 6.26933C66.466 5.37514 66.4337 4.55801 66.3988 3.81795C66.3691 3.13955 66.1911 2.67702 65.8646 2.43037C65.5405 2.18387 65.2167 1.98334 64.893 1.82876L64.9374 1.59782C65.2935 1.65928 65.6984 1.72104 66.152 1.78311C66.6052 1.81131 67.0263 1.82541 67.4152 1.82541C67.7713 1.82541 68.1761 1.81131 68.6298 1.78311C69.1156 1.72165 69.5367 1.65989 69.893 1.59782L69.9237 1.82908ZM105.178 10.2934L104.886 10.3855C103.753 8.04204 102.133 6.17651 100.028 4.78893C97.955 3.40133 95.3476 2.70752 92.2059 2.70752C90.4569 2.70752 88.7888 3.06211 87.2017 3.77129C85.6146 4.44972 84.2219 5.42104 83.0235 6.68525C81.8575 7.91865 80.9182 9.41416 80.2056 11.1718C79.4931 12.9294 79.1368 14.8721 79.1368 16.9997C79.1368 19.1273 79.4931 21.0699 80.2056 22.8275C80.9183 24.5851 81.8576 26.096 83.0235 27.3603C84.2219 28.5937 85.6146 29.5496 87.2017 30.228C88.7888 30.9063 90.4569 31.2455 92.2059 31.2455C95.3153 31.2455 97.8417 30.783 99.785 29.8579C101.761 28.9021 103.429 27.4528 104.789 25.5102L105.081 25.6024L104.984 28.5626C104.239 29.3026 103.38 29.9656 102.409 30.5514C101.437 31.1064 100.384 31.5844 99.2508 31.9853C98.1496 32.3553 96.9998 32.6328 95.8013 32.8178C94.6029 33.0338 93.4045 33.1419 92.2062 33.1419C89.7121 33.1419 87.3315 32.7564 85.0643 31.9855C82.797 31.2146 80.8051 30.1354 79.0885 28.7478C77.3718 27.3294 76.0114 25.6335 75.0074 23.66C74.0033 21.6557 73.5013 19.4356 73.5013 16.9996C73.5013 14.5636 74.0033 12.3589 75.0074 10.3855C76.0114 8.38112 77.3718 6.66976 79.0885 5.25138C80.8051 3.83294 82.797 2.7537 85.0643 2.01365C87.3315 1.24275 89.7122 0.8573 92.2062 0.8573C93.4045 0.8573 94.6029 0.949805 95.8013 1.13482C96.9998 1.31983 98.1496 1.61277 99.2508 2.01365C100.384 2.38368 101.437 2.86163 102.409 3.44753C103.38 4.00256 104.239 4.65009 104.984 5.39013L105.178 10.2934ZM156.437 32.356C156.275 32.3278 156 32.297 155.612 32.2638C155.256 32.2638 154.867 32.2497 154.446 32.2215C154.024 32.2215 153.619 32.2074 153.231 32.1792H150.316C149.928 32.2074 149.539 32.2381 149.15 32.2714C148.794 32.2996 148.519 32.3303 148.325 32.3635L148.28 32.1782C148.604 32.0242 148.928 31.8237 149.252 31.5766C149.576 31.3302 149.754 30.8676 149.786 30.1891C149.816 29.449 149.83 28.6782 149.83 27.8764C149.86 27.0747 149.875 26.165 149.875 25.1475V21.6785V17.007V12.3355V8.82025C149.875 7.80269 149.86 6.90846 149.83 6.13756C149.83 5.33585 149.816 4.56497 149.786 3.82493C149.756 3.14653 149.578 2.68401 149.252 2.43735C148.928 2.15984 148.604 1.94407 148.28 1.79005L148.325 1.6048C148.519 1.66626 148.794 1.71251 149.15 1.74356C149.539 1.74356 149.928 1.75766 150.316 1.78586C150.737 1.81406 151.142 1.82817 151.531 1.82817H153.231C153.62 1.79996 154.025 1.78586 154.446 1.78586C154.867 1.75766 155.256 1.72693 155.612 1.69368C156 1.66548 156.275 1.63475 156.437 1.60149L156.482 1.78682C156.126 1.94081 155.786 2.15656 155.461 2.43408C155.17 2.68057 155.008 3.1431 154.975 3.82166C154.946 4.5617 154.913 5.33257 154.878 6.13429V27.8732C154.908 28.6749 154.94 29.4458 154.975 30.1858C155.005 30.8642 155.167 31.3267 155.461 31.5734C155.786 31.8199 156.126 32.0204 156.482 32.1749L156.437 32.356Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default GucciIcon;
