let interval = 180000;
let animation = 'stop';
let testMinute = 1;
let testHour = 1;

var testClock = () => {
  let tickingClock = setInterval(() => {
    if (testMinute == 60) {
      testMinute = 1;
      testHour < 24 ? testHour += 1 : testHour = 0;
    } else {
      testMinute += 1;
    }
  }, 50);
}

renderBackground();

var renderInterval = (i) => {
  clearInterval(renderInterval);
  var renderInterval = setInterval(() => {
    renderBackground();
  }, i);
}

renderInterval(180000);

$('#check').click(() => {
  if (animation == 'start') {
    $('#check').text('Check it out');
    animation = 'stop';
    renderInterval(180000);
    renderBackground();
  } else {
    testClock();
    $('#check').text('STOP');
    animation = 'start';
    renderBackground();
    renderInterval(100);
  }
})

function timeOfDay() {
  switch (animation) {
    case 'stop':
      var date = new Date();
      return {
        day: date.getDate(),
        month: date.getMonth() + 1,
        hour: date.getHours(),
        minute: date.getMinutes()
      }
      break;
    case 'start':
      var date = new Date();
      console.log(testHour + ' ' + testMinute);
      return {
        day: date.getDate(),
        month: date.getMonth() + 1,
        minute: testMinute,
        hour: testHour
      }
      break;
    default:

  }
}

function imageForTimeOfDay() {

  let timeOfInterval = (interval / 60) / 1000;

  let dayLengthOfMonth = [
    [],
    [, 483, 485, 486, 487, 488, 490, 491, 493, 494, 497, 498, 500, 502, 504, 507, 508, 511, 513, 516, 518, 521, 523, 526, 529, 531, 534, 538, 540, 543, 546, 550],
    [, 552, 556, 559, 563, 565, 569, 572, 576, 579, 582, 586, 590, 593, 596, 600, 604, 607, 611, 615, 619, 622, 626, 629, 633, 636, 640, 645, 649, 650],
    [, 652, 656, 660, 663, 667, 671, 674, 678, 683, 686, 690, 694, 697, 701, 706, 709, 713, 717, 720, 725, 728, 732, 736, 740, 744, 748, 751, 755, 759, 763, 767],
    [, 770, 775, 778, 782, 786, 789, 793, 798, 801, 805, 808, 812, 816, 820, 824, 827, 831, 835, 838, 842, 845, 849, 853, 856, 860, 863, 867, 870, 874, 878],
    [, 880, 884, 887, 891, 894, 897, 901, 904, 907, 910, 914, 916, 920, 922, 926, 928, 931, 934, 936, 940, 942, 944, 948, 950, 952, 955, 957, 959, 961, 963, 966],
    [, 968, 969, 971, 973, 974, 976, 978, 978, 980, 981, 982, 983, 984, 985, 985, 987, 987, 988, 988, 988, 988, 988, 988, 988, 987, 987, 987, 986, 986, 985],
    [, 985, 984, 982, 982, 981, 979, 978, 977, 976, 974, 972, 970, 969, 967, 965, 962, 960, 958, 956, 954, 952, 949, 946, 944, 941, 939, 936, 933, 930, 928, 925],
    [, 922, 918, 916, 912, 910, 906, 903, 901, 897, 894, 890, 887, 884, 881, 877, 873, 870, 866, 863, 859, 856, 852, 849, 845, 842, 838, 835, 831, 828, 824, 820],
    [, 816, 813, 809, 805, 802, 797, 794, 790, 787, 783, 779, 775, 772, 768, 764, 760, 757, 753, 749, 745, 741, 738, 733, 730, 726, 723, 718, 715, 711, 708],
    [, 704, 699, 696, 692, 689, 685, 681, 677, 673, 670, 666, 663, 658, 654, 651, 647, 643, 640, 636, 632, 629, 625, 621, 618, 614, 610, 607, 603, 600, 597, 593],
    [, 589, 586, 583, 579, 575, 573, 569, 565, 563, 559, 556, 553, 550, 546, 544, 541, 537, 535, 532, 529, 527, 524, 521, 518, 517, 514, 511, 509, 507, 504],
    [, 503, 500, 499, 497, 495, 493, 492, 490, 489, 487, 486, 485, 484, 483, 482, 482, 481, 480, 479, 480, 479, 479, 479, 479, 479, 480, 480, 480, 481, 482, 483]
  ]

  let sunrises = [
    [],
    [, '07:26', '07:25', '07:25', '07:25', '07:25', '07:25', '07:25', '07:24', '07:24', '07:23', '07:23', '07:22', '07:22', '07:21', '07:20', '07:20', '07:19', '07:18', '07:17', '07:16', '07:15', '07:14', '07:13', '07:12', '07:11', '07:10', '07:08', '07:07', '07:06', '07:05', '07:03'],
    [, '07:02', '07:00', '06:59', '06:57', '06:56', '06:54', '06:53', '06:51', '06:49', '06:48', '06:46', '06:44', '06:42', '06:41', '06:39', '06:37', '06:35', '06:33', '06:31', '06:29', '06:27', '06:25', '06:24', '06:22', '06:20', '06:18', '06:15', '06:13', '06:12'],
    [, '06:11', '06:09', '06:07', '06:05', '06:03', '06:01', '05:59', '05:57', '05:54', '05:52', '05:50', '05:48', '05:46', '05:44', '05:41', '05:39', '05:37', '05:35', '05:33', '05:30', '05:28', '05:26', '05:24', '05:21', '06:19', '06:17', '06:15', '06:13', '06:10', '06:08', '06:06'],
    [, '06:04', '06:01', '05:59', '05:57', '05:55', '05:53', '05:51', '05:48', '05:46', '05:44', '05:42', '05:40', '05:38', '05:35', '05:33', '05:31', '05:29', '05:27', '05:25', '05:23', '05:21', '05:19', '05:17', '05:15', '05:13', '05:11', '05:09', '05:07', '05:05', '05:03'],
    [, '05:02', '05:00', '04:58', '04:56', '04:54', '04:53', '04:51', '04:49', '04:48', '04:46', '04:44', '04:43', '04:41', '04:40', '04:38', '04:37', '04:35', '04:34', '04:33', '04:31', '04:30', '04:29', '04:27', '04:26', '04:25', '04:24', '04:23', '04:22', '04:21', '04:20', '04:19'],
    [, '04:18', '04:18', '04:17', '04:16', '04:16', '04:15', '04:14', '04:14', '04:13', '04:13', '04:13', '04:12', '04:12', '04:12', '04:12', '04:11', '04:11', '04:11', '04:11', '04:11', '04:12', '04:12', '04:12', '04:12', '04:13', '04:13', '04:13', '04:14', '04:14', '04:15'],
    [, '04:15', '04:16', '04:17', '04:17', '04:18', '04:19', '04:20', '04:20', '04:21', '04:22', '04:23', '04:24', '04:25', '04:26', '04:27', '04:29', '04:30', '04:31', '04:32', '04:33', '04:34', '04:36', '04:37', '04:38', '04:40', '04:41', '04:42', '04:44', '04:45', '04:46', '04:48'],
    [, '04:49', '04:51', '04:52', '04:54', '04:55', '04:57', '04:58', '04:59', '05:01', '05:02', '05:04', '05:05', '05:07', '05:08', '05:10', '05:12', '05:13', '05:15', '05:16', '05:18', '05:19', '05:21', '05:22', '05:24', '05:25', '05:27', '05:28', '05:30', '05:31', '05:33', '05:34'],
    [, '05:36', '05:37', '05:39', '05:41', '05:42', '05:44', '05:45', '05:47', '05:48', '05:50', '05:51', '05:53', '05:54', '05:56', '05:57', '05:59', '06:00', '06:02', '06:03', '06:05', '06:07', '06:08', '06:10', '06:11', '06:13', '06:14', '06:16', '06:17', '06:19', '06:20'],
    [, '06:22', '06:24', '06:25', '06:27', '06:28', '06:30', '06:31', '06:33', '06:35', '06:36', '06:38', '06:39', '06:41', '06:43', '06:44', '06:46', '06:48', '06:49', '06:51', '06:53', '06:54', '06:56', '06:58', '06:59', '07:01', '07:03', '07:04', '06:06', '06:08', '06:09', '06:11'],
    [, '06:13', '06:14', '06:16', '06:18', '06:20', '06:21', '06:23', '06:25', '06:26', '06:28', '06:30', '06:31', '06:33', '06:35', '06:36', '06:38', '06:40', '06:41', '06:43', '06:45', '06:46', '06:48', '06:49', '06:51', '06:52', '06:54', '06:56', '06:57', '06:58', '07:00'],
    [, '07:01', '07:03', '07:04', '07:05', '07:07', '07:08', '07:09', '07:10', '07:11', '07:13', '07:14', '07:15', '07:16', '07:17', '07:18', '07:18', '07:19', '07:20', '07:21', '07:21', '07:22', '07:23', '07:23', '07:24', '07:24', '07:24', '07:25', '07:25', '07:25', '07:25', '07:25']
  ]
  //dłogosc dnia w minutach
  let todayDayLength = dayLengthOfMonth[timeOfDay().month][timeOfDay().day];
  //wschod slonca w minutach od polnocy
  let timeOfSunrise = parseInt(sunrises[timeOfDay().month][timeOfDay().day].slice(0, 2)) * 60 + parseInt(sunrises[timeOfDay().month][timeOfDay().day].slice(3, 5));
  //długosc dnia dla jednego obrazka w minutach
  let lengthTimeForImage = todayDayLength / 9;
  //o ile ma zmienic sie opacity dla interwalu, bez jednostki
  let pieceOfOpacity = 1 / (lengthTimeForImage / timeOfInterval);
  //obecny czas w minutach
  let presentTime = (timeOfDay().hour * 60) + (timeOfDay().minute);
  //obecny czas w minutach liczony od wschodu slonca
  let presentTimeFromSunrise = presentTime - timeOfSunrise;
  //wybiera numer obrazka i generuje jego sciezke
  let numberOfImage = presentTimeFromSunrise < lengthTimeForImage && presentTimeFromSunrise >= 0 ? 1 : (Math.floor(presentTimeFromSunrise / lengthTimeForImage)) + 1;
  let opacity = 1 - (((presentTimeFromSunrise % lengthTimeForImage) / timeOfInterval) * pieceOfOpacity);
  if (presentTime >= timeOfSunrise && presentTime <= (timeOfSunrise + todayDayLength)) {
    return {
      srcUnder: (() => {
        return 'url(\'./images/active_bg/' + (numberOfImage + 1) + '.jpg\')'
      })(),
      srcAbove: (() => {
        return 'url(\'./images/active_bg/' + (numberOfImage) + '.jpg\')'
      })(),
      opacity
    }
  } else if (presentTime >= (timeOfSunrise + todayDayLength) && presentTime <= (timeOfSunrise + todayDayLength + 30)) {
    return {
      srcUnder: (() => `url('./images/active_bg/11.jpg')`
      )(),
      srcAbove: (() => `url('./images/active_bg/10.jpg')`
      )(),
      opacity: (() => (30 - (presentTime - timeOfSunrise - todayDayLength)) / 30
      )()
    }
  } else if (presentTime >= (timeOfSunrise + todayDayLength + 30) && presentTime <= (timeOfSunrise + todayDayLength + 30 + 60)) {
    return {
      srcUnder: (() => {
        return 'url(\'./images/active_bg/12.jpg\')'
      })(),
      srcAbove: (() => {
        return 'url(\'./images/active_bg/11.jpg\')'
      })(),
      opacity: (() => {
        return (60 - (presentTime - timeOfSunrise - todayDayLength - 30)) / 60
      })()
    }
  } else if (presentTime >= (timeOfSunrise - 60) && presentTime <= timeOfSunrise) {
    return {
      srcUnder: (() => {
        return 'url(\'./images/active_bg/1.jpg\')'
      })(),
      srcAbove: (() => {
        return 'url(\'./images/active_bg/12.jpg\')'
      })(),
      opacity: (() => {
        return (timeOfSunrise - presentTime) / 60
      })()
    }
  } else {
    return {
      srcUnder: (() => {
        return null
      })(),
      srcAbove: (() => {
        return 'url(\'./images/active_bg/12.jpg\')'
      })(),
      opacity: 1
    }
  }
}

function renderBackground() {
  $('#bg_1').css({
    'background-image': imageForTimeOfDay().srcAbove,
    'opacity': imageForTimeOfDay().opacity
  });

  $('#bg_2').css({
    'background-image': imageForTimeOfDay().srcUnder
  });
}