-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 27, 2021 at 04:50 AM
-- Server version: 10.4.17-MariaDB
-- PHP Version: 8.0.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `gmfdatabase`
--

-- --------------------------------------------------------

--
-- Table structure for table `buyersprofile`
--

CREATE TABLE `buyersprofile` (
  `Id-Number-BuyerProfile` int(4) NOT NULL,
  `Name-buyerprofile` text NOT NULL,
  `Address-buyerprofile` varchar(25) NOT NULL,
  `FirstPhone-buyerprofile` int(12) NOT NULL,
  `SecondaryPhone-buyerprofile` varchar(14) NOT NULL,
  `ProfileCreated-buyerprofile` date NOT NULL,
  `MoneyContributed` int(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `cardcreditionals`
--

CREATE TABLE `cardcreditionals` (
  `ID- MethodType_CardCrediontials` varchar(5) NOT NULL,
  `FullName-cardcreditionals` date NOT NULL,
  `CardNum-cardcreditionals` varchar(16) NOT NULL,
  `ExpDate-cardcreditionals` date NOT NULL,
  `CRV-cardcreditionals` int(3) NOT NULL,
  `Amount` int(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `gmfprofile`
--

CREATE TABLE `gmfprofile` (
  `Id-Number-gmfprofile` varchar(4) NOT NULL,
  `Name-gmfprofile` int(20) NOT NULL,
  `Address-gmfprofile` text NOT NULL,
  `WorkPhone-gmfprofile` varchar(12) NOT NULL,
  `SecondaryNumber-gmfprofile` varchar(16) DEFAULT NULL,
  `Revenue-gmfprofile` int(8) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `organizationprofile`
--

CREATE TABLE `organizationprofile` (
  `Id-Nunber-OrgPro` varchar(4) NOT NULL,
  `Name-organizationprofile` text NOT NULL,
  `PhoneNumber-organizationprofile` varchar(20) NOT NULL,
  `Address-organizationprofile` varchar(25) NOT NULL,
  `HomePhone-organizationprofile` varchar(10) NOT NULL,
  `SecondaryPhone-organizationprofile` varchar(16) NOT NULL,
  `Email-organizationprofile` varchar(20) NOT NULL,
  `MTD Revenue-organizationprofile` int(8) NOT NULL,
  `CatagoryOfService-organizationprofile` text NOT NULL,
  `Description-organizationprofile` int(11) NOT NULL,
  `Id-Number` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `partnerprofile`
--

CREATE TABLE `partnerprofile` (
  `Id-Number-Partner` int(4) NOT NULL,
  `FName-partnerprofile` text NOT NULL,
  `LName-partnerprofile` text NOT NULL,
  `Telephone-partnerprofile` int(11) NOT NULL,
  `Address-partnerprofile` int(11) NOT NULL,
  `Email-partnerprofile` int(11) NOT NULL,
  `CatagoryOfService-partnerprofile` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `paymentmethods`
--

CREATE TABLE `paymentmethods` (
  `Id-MethodType-Pay` varchar(5) NOT NULL,
  `Description` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `sellerprofile`
--

CREATE TABLE `sellerprofile` (
  `Id-Number-sellerprofile` int(11) NOT NULL,
  `Revenue-sellerpofile` int(8) NOT NULL,
  `Category Of Services- -sellerpofile` int(3) NOT NULL,
  `NumberOfSales-sellerpofile` int(4) NOT NULL,
  `Conversion-sellerpofile` float NOT NULL,
  `ID-UserType` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `ID-UserType-Users` varchar(4) NOT NULL,
  `Fname_Users` text NOT NULL,
  `Lname-Users` text NOT NULL,
  `DOB_Users` date NOT NULL,
  `Email-Users` varchar(20) NOT NULL,
  `Location-Users` text NOT NULL,
  `Security Question_Users` text NOT NULL,
  `Telephone-Users` varchar(16) NOT NULL,
  `SQ_Users` varchar(16) NOT NULL,
  `Description-User` text DEFAULT NULL,
  `Id-Users` int(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `usertype`
--

CREATE TABLE `usertype` (
  `ID-Type` varchar(4) NOT NULL,
  `Description Type` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `buyersprofile`
--
ALTER TABLE `buyersprofile`
  ADD PRIMARY KEY (`Id-Number-BuyerProfile`);

--
-- Indexes for table `cardcreditionals`
--
ALTER TABLE `cardcreditionals`
  ADD PRIMARY KEY (`ID- MethodType_CardCrediontials`);

--
-- Indexes for table `gmfprofile`
--
ALTER TABLE `gmfprofile`
  ADD PRIMARY KEY (`Id-Number-gmfprofile`);

--
-- Indexes for table `organizationprofile`
--
ALTER TABLE `organizationprofile`
  ADD PRIMARY KEY (`Id-Nunber-OrgPro`);

--
-- Indexes for table `partnerprofile`
--
ALTER TABLE `partnerprofile`
  ADD PRIMARY KEY (`Id-Number-Partner`);

--
-- Indexes for table `paymentmethods`
--
ALTER TABLE `paymentmethods`
  ADD PRIMARY KEY (`Id-MethodType-Pay`);

--
-- Indexes for table `sellerprofile`
--
ALTER TABLE `sellerprofile`
  ADD PRIMARY KEY (`Id-Number-sellerprofile`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`ID-UserType-Users`);

--
-- Indexes for table `usertype`
--
ALTER TABLE `usertype`
  ADD PRIMARY KEY (`ID-Type`);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `buyersprofile`
--
ALTER TABLE `buyersprofile`
  ADD CONSTRAINT `buyersprofile_ibfk_1` FOREIGN KEY (`Id-Number-BuyerProfile`) REFERENCES `sellerprofile` (`Id-Number-sellerprofile`);

--
-- Constraints for table `paymentmethods`
--
ALTER TABLE `paymentmethods`
  ADD CONSTRAINT `paymentmethods_ibfk_1` FOREIGN KEY (`Id-MethodType-Pay`) REFERENCES `cardcreditionals` (`ID- MethodType_CardCrediontials`);

--
-- Constraints for table `users`
--
ALTER TABLE `users`
  ADD CONSTRAINT `users_ibfk_1` FOREIGN KEY (`ID-UserType-Users`) REFERENCES `usertype` (`ID-Type`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
