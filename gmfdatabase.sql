 phpMyAdmin SQL Dump
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
  `Id-Number_buyer` int(4) NOT NULL,
  `fName_buyer` text(20) NOT NULL,
  `lName_buyer` text(20) NOT NULL,
  `Address_buyer` varchar(50) NOT NULL,
  `FirstPhone_buyer` int(12) NOT NULL,
  `SecondaryPhone_buyer` varchar(14) NOT NULL,
  `ProfileCreated_buyer` date NOT NULL,
  `MoneyContributed` int(5) NOT NULL
  PRIMARY KEY (`Id-Number-buyer`);
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
  `Amount-cardcreditionals` int(4) NOT NULL
  PRIMARY KEY (`ID- MethodType_CardCrediontials`);
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `gmfprofile`
--

CREATE TABLE `gmfprofile` (
  PRIMARY KEY (`Id-Number-gmfprofile`),
  `Id-Number_gmfprofile` int(4) NOT NULL,
  `Fname_gmfprofile` text(20) NOT NULL,
   'lname_gmfprofile' text(20) NOT NULL,
  `Address_gmfprofile` text(50) NOT NULL,
  `WorkPhone_gmfprofile` varchar(20) NOT NULL,
  `SecondaryNumber_gmfprofile` varchar(16) DEFAULT NULL,
  `Revenue_gmfprofile` int(8) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `organizationprofile`
--

CREATE TABLE `organizationprofile` (
  `Id-Nunber_OrgPro` int(4) NOT NULL,
  `Name_organizationprofile` text NOT NULL,
  `PhoneNumber_organizationprofile` varchar(16) NOT NULL,
  `Address_organizationprofile` varchar(25) NOT NULL,
  `HomePhone_organizationprofile` varchar(10) NOT NULL,
  `SecondaryPhone_organizationprofile` varchar(16) NOT NULL,
  `Email_organizationprofile` varchar(20) NOT NULL,
  `MTD Revenue_organizationprofile` int(8) NOT NULL,
  `CatagoryOfService_organizationprofile` text(15) NOT NULL,
  `Description_organizationprofile` int(11) NOT NULL,
  `Id-Number` int(8) NOT NULL,
  PRIMARY KEY (`Id-Nunber-OrgPro`)

) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `partnerprofile`
--

CREATE TABLE `partnerprofile` (
  `Id_Number_partnerprofile` int(4) NOT NULL,
  `FName_partnerprofile` text(20) NOT NULL,
  `LName_partnerprofile` text(20) NOT NULL,
  `Telephone_partnerprofile` int(11) NOT NULL,
  `Address_partnerprofile` varchar(50) NOT NULL,
  `Email_partnerprofile` varchar(20) NOT NULL,
  `CatagoryOfService-partnerprofile` text NOT NULL,
  PRIMARY KEY (`Id-Number-partnerprofille`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `paymentmethods`
--

CREATE TABLE `paymentmethods` (

  `Id-MethodType_Pay` varchar(5) NOT NULL,
  `Description_payment` text(50) NOT NULL
  PRIMARY KEY (`Id-MethodType-Pay`);
  FOREIGN KEY (`Id-MethodType-Pay`) REFERENCES `cardcreditionals` (`ID- MethodType_CardCrediontials`);
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `sellerprofile`
--

CREATE TABLE `sellerprofile` (
  `Id-Number_sellerprofile` int(4) NOT NULL,
  `Revenue_sellerpofile` int(8) NOT NULL,
  `Category Of Services_sellerpofile` int(3) NOT NULL,
  `NumberOfSales_sellerpofile` int(4) NOT NULL,
  `Conversion_sellerpofile` float NOT NULL,
  `ID-UserType` varchar(12) NOT NULL,
   PRIMARY KEY (`Id-Number-sellerprofile`);
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `ID_UserType_Users` varchar(12) NOT NULL,
  `Fname_Users` text(20) NOT NULL,
  `Lname_Users` text(20) NOT NULL,
  `DOB_Users` date NOT NULL,
  `Email_Users` varchar(20) NOT NULL,
  `Location_Users` text NOT NULL,
  `SQ_Users` text NOT NULL,
  `Telephone_Users` varchar(16) NOT NULL,
  `SQ_Users` varchar(30) NOT NULL,
  `Description_Users` text(50) text DEFAULT NULL,
  `Id-Users` int(4) NOT NULL,
   PRIMARY KEY (`ID-UserType-Users`),
   FOREIGN KEY (`ID-UserType-Users`) REFERENCES `usertype` (`ID-Type`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `usertype`
--

CREATE TABLE `usertype` (
  `ID-Type` varchar(12) NOT NULL,
  `Description_Type` text NOT NULL,
  PRIMARY KEY (`ID-Type`)
  
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE `shipping` (
  `Id-Number` int(4) NOT NULL,
  `fName_shipping` text(20) NOT NULL,
  `lName_shipping` text(20) NOT NULL,
  `Address1_shipping` varchar(50) NOT NULL,
  `Address2__shipping` varchar(50) NOT NULL,
  `country_shipping` text(20) NOT NULL,
  `city_shippiing` text(20) NOT NULL,
   'zip_shipping' int (20) NOT NULL,
  `Phone_shipping` varchar(14) NOT NULL,
  'Delivery_shipping' var(20) NOT NULL,
  PRIMARY KEY (`Id-Number`)
  FOREIGN KEY ('Id-buyer') REFERENCES (buyersprofile)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
