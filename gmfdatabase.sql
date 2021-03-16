phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 07-03-2021 a las 23:46:02
-- Versión del servidor: 10.4.17-MariaDB
-- Versión de PHP: 7.3.27
=======
 phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 12, 2021 at 02:10 AM
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
--  table structure `buyersprofile`
--

CREATE TABLE `buyersprofile` (
  `Id_Number_buyer` int(4) NOT NULL,
  `username_buyer` varchar(20) NOT NULL,
  `fName_buyer` varchar(20) NOT NULL,
  `lName_buyer` varchar(20) NOT NULL,

  `Password1_buyerprofile` varchar(20) NOT NULL,

  `Password_buyer` varchar(20) NOT NULL,
  `Address_buyer` varchar(50) NOT NULL,
  `FirstPhone_buyer` int(12) NOT NULL,
  `SecondaryPhone_buyer` varchar(14) NOT NULL,
  `ProfileCreated_buyer` date NOT NULL,
  `MoneyContributed` int(5) NOT NULL
  `MoneyContributed` int(5) NOT NULL,
  `ID_Number` int(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--

CREATE TABLE `gmfprofile` (
  `Id_Number_gmfprofile` int(4) NOT NULL,
  `username_gmfprofile` varchar(20) NOT NULL,
  `Fname_gmfprofile` varchar(20) NOT NULL,
  `lname_gmfprofile` varchar(20) NOT NULL,
  `Password_gmfprofile` varchar(20) NOT NULL,
  `Address_gmfprofile` varchar(50) NOT NULL,
  `WorkPhone_gmfprofile` varchar(20) NOT NULL,
  `SecondaryNumber_gmfprofile` varchar(16) NOT NULL,
  `Revenue_gmfprofile` int(8) NOT NULL,
  `ID_Number` int(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--

-- Table structure for `organizationprofile`
--

CREATE TABLE `organizationprofile` (
  `Id_Nunber_OrgPro` int(4) NOT NULL,
  `Name_organizationprofile` varchar(20) NOT NULL,
  `username_Organizationprofile` varchar(20) NOT NULL,
  `PhoneNumber_organizationprofile` varchar(16) NOT NULL,
  `Password1_organizationprofile` varchar(20) NOT NULL,
  `Address_organizationprofile` varchar(25) NOT NULL,
  `HomePhone_organizationprofile` varchar(10) NOT NULL,
  `SecondaryPhone_organizationprofile` varchar(16) NOT NULL,
  `Email_organizationprofile` varchar(20) NOT NULL,
  `Revenue_organizationprofile` int(8) NOT NULL,
  `CatagoryOfService_organizationprofile` varchar(15) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
=======
-- Table structure for table `images`
--

CREATE TABLE `images` (
  `Id_Number_images` int(4) NOT NULL,
  `title_images` varchar(50) NOT NULL,
  `image_images` blob NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- table structure `partnerprofile`
--
CREATE TABLE `partnerprofile` (
  `Id_Number_partnerprofile` int(4) NOT NULL,
  `username_partnerprofile` varchar(20) NOT NULL,
  `FName_partnerprofile` varchar(20) NOT NULL,
  `LName_partnerprofile` varchar(20) NOT NULL,
  `Password1_partnerprofile` varchar(20) NOT NULL,
  `Telephone_partnerprofile` varchar(12) NOT NULL,
  `Address_partnerprofile` varchar(50) NOT NULL,
  `Email_partnerprofile` varchar(20) NOT NULL,
  `CatagoryOfService_partnerprofile` varchar(50) NOT NULL

 
CREATE TABLE `organizationprofile` (
  `Id_Nunber_orgpro` int(4) NOT NULL,
  `Name_orgpro` int(11) NOT NULL,
  `Description_orgprofile` varchar(20) NOT NULL,
  `Username_orgpro` varchar(20) NOT NULL,
  `Password_orgpro` varchar(20) NOT NULL,
  `Goals` text NOT NULL,
  `Phone_orgprofile` varchar(16) NOT NULL,
  `Address_orgpro` varchar(25) NOT NULL,
  `Homephone_ogpro` varchar(10) NOT NULL,
  `Secondaryphone_orgpro` varchar(16) NOT NULL,
  `Email_orgpro` varchar(20) NOT NULL,
  `Revenue_orgpro` int(8) NOT NULL,
  `catofservice_orgpro` varchar(50) NOT NULL,
  `Product_orgpro` text NOT NULL,
  `ID_number` int(4) NOT NULL,
  `Image_orgpro` int(4) NOT NULL,
  `video_orgpro` int(4) NOT NULL

) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure `paymentmethod`
--


CREATE TABLE `paymentmethod` (
  `Id_Number_paymentmethod` int(4) NOT NULL,
  `FullName_paymentmethod` varchar(50) NOT NULL,
  `CardNum_paymentmethod` varchar(16) NOT NULL,
  `ExpDate_paymentmethod` date NOT NULL,
  `CRV_paymentmethod` int(3) NOT NULL

CREATE TABLE `partnerprofile` (
  `Id_Number_partner` int(4) NOT NULL,
  `username_partner` varchar(20) NOT NULL,
  `FName_partner` varchar(20) NOT NULL,
  `LName_partner` varchar(20) NOT NULL,
  `Password_partner` varchar(20) NOT NULL,
  `Telephone_partner` varchar(12) NOT NULL,
  `Address_partner` varchar(50) NOT NULL,
  `Email_partner` varchar(20) NOT NULL,
  `Catofservice_partner` varchar(50) NOT NULL,
  `ID_Number` int(4) NOT NULL

) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--

-- Table structure`sellerprofile`
--

CREATE TABLE `sellerprofile` (
  `Id_Number_sellerprofile` int(4) NOT NULL,
  `username_sellerprofile` varchar(20) NOT NULL,
  `Revenue_sellerpofile` int(8) NOT NULL,
  `Category_Services_sellerpofile` int(3) NOT NULL,
  `NumberOfSales_sellerpofile` int(4) NOT NULL,
  `Conversion_sellerpofile` float DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Table structure for table `paymentmethod`
--

CREATE TABLE `paymentmethod` (
  `Id_Number_paymentmethod` int(4) NOT NULL,
  `FullName_paymentmethod` varchar(50) NOT NULL,
  `CardNum_paymentmethod` varchar(16) NOT NULL,
  `ExpDate_paymentmethod` date NOT NULL,
  `CRV_paymentmethod` int(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
>>>>>>> main

-- --------------------------------------------------------

--
-- Table Structure`shipping`
--


CREATE TABLE `shipping` (
  `Id_Number_shipping` int(4) NOT NULL,
  `FName_shipping` varchar(20) NOT NULL,
  `lName_shipping` varchar(20) NOT NULL,
  `Address1_shipping` varchar(50) NOT NULL,
  `Address2_shipping` varchar(50) DEFAULT NULL,
  `country_shipping` varchar(20) NOT NULL,
  `city_shipping` varchar(20) NOT NULL,
  `zip_shipping` int(20) NOT NULL,
  `phone_shipping` varchar(14) NOT NULL,
  `delivery_shipping` varchar(20) NOT NULL,
  `ID_Number` int(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
=======
CREATE TABLE `sellerprofile` (
  `Id_Number_seller` int(4) NOT NULL,
  `Username_seller` varchar(20) NOT NULL,
  `Password_seller` int(11) NOT NULL,
  `Revenue_seller` int(8) NOT NULL,
  `Catofservice_seller` int(50) NOT NULL,
  `NumberOfSales_selller` int(4) NOT NULL,
  `Conversion_seller` float DEFAULT NULL,
  `ID_Number` int(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- table structure `users`
-- Table structure for table `shipping`
--

CREATE TABLE `shipping` (
  `Id_Number_shipping` int(4) NOT NULL,
  `FName_shipping` varchar(20) NOT NULL,
  `lName_shipping` varchar(20) NOT NULL,
  `Address1_shipping` varchar(50) NOT NULL,
  `Address2_shipping` varchar(50) DEFAULT NULL,
  `country_shipping` varchar(20) NOT NULL,
  `city_shipping` varchar(20) NOT NULL,
  `zip_shipping` int(20) NOT NULL,
  `phone_shipping` varchar(14) NOT NULL,
  `delivery_shipping` varchar(20) NOT NULL,
  `ID_Number` int(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `ID_Number` int(4) NOT NULL,
  `username_users` varchar(20) NOT NULL,
  `Fname_Users` varchar(20) NOT NULL,
  `Lname_Users` varchar(20) NOT NULL,
  `Password1_Users` varchar(20) NOT NULL,
  `DOB_Users` date NOT NULL,
  `Email_Users` varchar(20) NOT NULL,
  `Location_Users` text NOT NULL,
  `Telephone_Users` varchar(16) NOT NULL,
  `SQ_Users` varchar(30) NOT NULL,
  `Description_Users` tinytext DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- ETable Structure `usertype`
--

CREATE TABLE `usertype` (
  `ID_Type` varchar(12) NOT NULL,
  `Description_Type` text NOT NULL

=======
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `videos_1`
--

CREATE TABLE `videos_1` (
  `ID_Number_v` int(4) NOT NULL,
  `title_videos` text NOT NULL,
  `videos_videos` blob NOT NULL

) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- primary keys for tables
--

--
-- primary keys for tables `buyersprofile`
--
ALTER TABLE `buyersprofile`

  ADD PRIMARY KEY (`Id_Number_buyer`);

--
-- primary keys for tables `gmfprofile`
--
ALTER TABLE `gmfprofile`
  ADD PRIMARY KEY (`Id_Number_gmfprofile`),
  ADD KEY `ID_Number` (`ID_Number`);

  ADD PRIMARY KEY (`Id_Number_buyer`),
  ADD KEY `ID_Number` (`ID_Number`);

--
-- Indexes for table `gmfprofile`
--
ALTER TABLE `gmfprofile`
  ADD PRIMARY KEY (`Id_Number_gmfprofile`),
  ADD KEY `ID_Number` (`ID_Number`);

--
-- Indexes for table `images`
--
ALTER TABLE `images`
  ADD PRIMARY KEY (`Id_Number_images`),
  ADD KEY `image_images` (`image_images`(3072));


--
-- primary keys for tables `organizationprofile`
--
ALTER TABLE `organizationprofile`

  ADD PRIMARY KEY (`Id_Nunber_OrgPro`);
=======
  ADD PRIMARY KEY (`Id_Nunber_OrgPro`),
  ADD KEY `ID_Number` (`ID_Number`),
  ADD KEY `Id_Number_I` (`ID_Number_I`),
  ADD KEY `ID_Number_vid` (`ID_Number_vid`),
  ADD KEY `ID_Number_vid_2` (`ID_Number_vid`);


--
-- primary keys for tables `partnerprofile`
--
ALTER TABLE `partnerprofile`

  ADD PRIMARY KEY (`Id_Number_partnerprofile`);

--
-- primary keys for tables `paymentmethod`

  ADD PRIMARY KEY (`Id_Number_partner`),
  ADD KEY `ID_Number` (`ID_Number`);

--
-- Indexes for table `paymentmethod`

--
ALTER TABLE `paymentmethod`
  ADD PRIMARY KEY (`Id_Number_paymentmethod`);

--
-- primary keys for tables `sellerprofile`
--
ALTER TABLE `sellerprofile`

  ADD PRIMARY KEY (`Id_Number_sellerprofile`);

  ADD PRIMARY KEY (`Id_Number_seller`),
  ADD KEY `ID_Number` (`ID_Number`);

--
-- Indexes for table `shipping`
--
ALTER TABLE `shipping`
  ADD PRIMARY KEY (`Id_Number_shipping`),
  ADD KEY `ID_Number` (`ID_Number`);
>>>>>>> main

--
-- primary keys for tables `shipping`
--

ALTER TABLE `shipping`
  ADD PRIMARY KEY (`Id_Number_shipping`),
  ADD KEY `ID_Number` (`ID_Number`);
=======
ALTER TABLE `users`
  ADD PRIMARY KEY (`ID_Number`);


--

--
ALTER TABLE `users`
  ADD PRIMARY KEY (`ID_Number`);
=======
ALTER TABLE `usertype`
  ADD PRIMARY KEY (`ID_Type`);

--
--  primary keys  `usertype`
--
ALTER TABLE `usertype`
  ADD PRIMARY KEY (`ID_Type`);

--

--


--
--  foreign key`gmfprofile`
--
ALTER TABLE `gmfprofile`
  ADD CONSTRAINT `gmfprofile_ibfk_1` FOREIGN KEY (`ID_Number`) REFERENCES `users` (`ID_Number`);
=======
ALTER TABLE `buyersprofile`
  ADD CONSTRAINT `buyersprofile_ibfk_1` FOREIGN KEY (`ID_Number`) REFERENCES `users` (`ID_Number`);

--
-- Constraints for table `gmfprofile`
--
ALTER TABLE `gmfprofile`
  ADD CONSTRAINT `gmfprofile_ibfk_1` FOREIGN KEY (`ID_Number`) REFERENCES `users` (`ID_Number`);

--
-- Constraints for table `images`
--
ALTER TABLE `images`
  ADD CONSTRAINT `images_ibfk_1` FOREIGN KEY (`Id_Number_images`) REFERENCES `organizationprofile` (`Id_Number_I`);

--
-- Constraints for table `organizationprofile`
--
ALTER TABLE `organizationprofile`
  ADD CONSTRAINT `organizationprofile_ibfk_1` FOREIGN KEY (`ID_Number`) REFERENCES `users` (`ID_Number`);

--
-- Constraints for table `partnerprofile`
--
ALTER TABLE `partnerprofile`
  ADD CONSTRAINT `partnerprofile_ibfk_1` FOREIGN KEY (`ID_Number`) REFERENCES `users` (`ID_Number`);

--
-- Constraints for table `shipping`
--
ALTER TABLE `shipping`
  ADD CONSTRAINT `shipping_ibfk_1` FOREIGN KEY (`ID_Number`) REFERENCES `users` (`ID_Number`);


--
-- foreign key la table `shipping`
--
ALTER TABLE `shipping`
  ADD CONSTRAINT `shipping_ibfk_1` FOREIGN KEY (`ID_Number`) REFERENCES `users` (`ID_Number`);

ALTER TABLE `users`
  ADD CONSTRAINT `users_ibfk_1` FOREIGN KEY (`ID_Number`) REFERENCES `shipping` (`ID_Number`);

COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;


