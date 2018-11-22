$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("com/cg/trg/resources/calculator.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: SWARUP TALUKDAR"
    }
  ],
  "line": 4,
  "name": "CALCULATOR",
  "description": "",
  "id": "calculator",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 6,
  "name": "Add",
  "description": "",
  "id": "calculator;add",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "entered two numbers \u003cnum1\u003e and \u003cnum2\u003e",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "added two numbers \u003csum\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "show the add result \u003cresult\u003e",
  "keyword": "Then "
});
formatter.examples({
  "line": 11,
  "name": "",
  "description": "",
  "id": "calculator;add;",
  "rows": [
    {
      "cells": [
        "num1",
        "num2",
        "sum",
        "result"
      ],
      "line": 12,
      "id": "calculator;add;;1"
    },
    {
      "cells": [
        "2",
        "2",
        "4",
        "4"
      ],
      "line": 13,
      "id": "calculator;add;;2"
    },
    {
      "cells": [
        "5",
        "6",
        "11",
        "11"
      ],
      "line": 14,
      "id": "calculator;add;;3"
    },
    {
      "cells": [
        "7",
        "2",
        "9",
        "9"
      ],
      "line": 15,
      "id": "calculator;add;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 13,
  "name": "Add",
  "description": "",
  "id": "calculator;add;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "entered two numbers 2 and 2",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "added two numbers 4",
  "matchedColumns": [
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "show the add result 4",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 20
    },
    {
      "val": "2",
      "offset": 26
    }
  ],
  "location": "StepDefCalculator.entered_two_numbers_and(int,int)"
});
formatter.result({
  "duration": 98317597,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 18
    }
  ],
  "location": "StepDefCalculator.added_two_numbers(int)"
});
formatter.result({
  "duration": 101732,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 20
    }
  ],
  "location": "StepDefCalculator.show_the_add_result(int)"
});
formatter.result({
  "duration": 82043,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Add",
  "description": "",
  "id": "calculator;add;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "entered two numbers 5 and 6",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "added two numbers 11",
  "matchedColumns": [
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "show the add result 11",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 20
    },
    {
      "val": "6",
      "offset": 26
    }
  ],
  "location": "StepDefCalculator.entered_two_numbers_and(int,int)"
});
formatter.result({
  "duration": 156701,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "11",
      "offset": 18
    }
  ],
  "location": "StepDefCalculator.added_two_numbers(int)"
});
formatter.result({
  "duration": 100502,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "11",
      "offset": 20
    }
  ],
  "location": "StepDefCalculator.show_the_add_result(int)"
});
formatter.result({
  "duration": 88195,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Add",
  "description": "",
  "id": "calculator;add;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "entered two numbers 7 and 2",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "added two numbers 9",
  "matchedColumns": [
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "show the add result 9",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "7",
      "offset": 20
    },
    {
      "val": "2",
      "offset": 26
    }
  ],
  "location": "StepDefCalculator.entered_two_numbers_and(int,int)"
});
formatter.result({
  "duration": 162854,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "9",
      "offset": 18
    }
  ],
  "location": "StepDefCalculator.added_two_numbers(int)"
});
formatter.result({
  "duration": 92297,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "9",
      "offset": 20
    }
  ],
  "location": "StepDefCalculator.show_the_add_result(int)"
});
formatter.result({
  "duration": 91477,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 17,
  "name": "Subtract two numbers",
  "description": "",
  "id": "calculator;subtract-two-numbers",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 18,
  "name": "entered two numbers \u003cnum1\u003e and \u003cnum2\u003e",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "subtracted two numbers \u003csub\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "show the sub result \u003cresult\u003e",
  "keyword": "Then "
});
formatter.examples({
  "line": 22,
  "name": "",
  "description": "",
  "id": "calculator;subtract-two-numbers;",
  "rows": [
    {
      "cells": [
        "num1",
        "num2",
        "sub",
        "result"
      ],
      "line": 23,
      "id": "calculator;subtract-two-numbers;;1"
    },
    {
      "cells": [
        "2",
        "2",
        "0",
        "0"
      ],
      "line": 24,
      "id": "calculator;subtract-two-numbers;;2"
    },
    {
      "cells": [
        "6",
        "5",
        "1",
        "1"
      ],
      "line": 25,
      "id": "calculator;subtract-two-numbers;;3"
    },
    {
      "cells": [
        "7",
        "2",
        "5",
        "5"
      ],
      "line": 26,
      "id": "calculator;subtract-two-numbers;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 24,
  "name": "Subtract two numbers",
  "description": "",
  "id": "calculator;subtract-two-numbers;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 18,
  "name": "entered two numbers 2 and 2",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "subtracted two numbers 0",
  "matchedColumns": [
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "show the sub result 0",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 20
    },
    {
      "val": "2",
      "offset": 26
    }
  ],
  "location": "StepDefCalculator.entered_two_numbers_and(int,int)"
});
formatter.result({
  "duration": 122653,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 23
    }
  ],
  "location": "StepDefCalculator.subtracted_two_numbers(int)"
});
formatter.result({
  "duration": 121833,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 20
    }
  ],
  "location": "StepDefCalculator.show_the_sub_result(int)"
});
formatter.result({
  "duration": 74658,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "Subtract two numbers",
  "description": "",
  "id": "calculator;subtract-two-numbers;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 18,
  "name": "entered two numbers 6 and 5",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "subtracted two numbers 1",
  "matchedColumns": [
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "show the sub result 1",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "6",
      "offset": 20
    },
    {
      "val": "5",
      "offset": 26
    }
  ],
  "location": "StepDefCalculator.entered_two_numbers_and(int,int)"
});
formatter.result({
  "duration": 123884,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 23
    }
  ],
  "location": "StepDefCalculator.subtracted_two_numbers(int)"
});
formatter.result({
  "duration": 81633,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 20
    }
  ],
  "location": "StepDefCalculator.show_the_sub_result(int)"
});
formatter.result({
  "duration": 95579,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "Subtract two numbers",
  "description": "",
  "id": "calculator;subtract-two-numbers;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 18,
  "name": "entered two numbers 7 and 2",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "subtracted two numbers 5",
  "matchedColumns": [
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "show the sub result 5",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "7",
      "offset": 20
    },
    {
      "val": "2",
      "offset": 26
    }
  ],
  "location": "StepDefCalculator.entered_two_numbers_and(int,int)"
});
formatter.result({
  "duration": 128806,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 23
    }
  ],
  "location": "StepDefCalculator.subtracted_two_numbers(int)"
});
formatter.result({
  "duration": 73838,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 20
    }
  ],
  "location": "StepDefCalculator.show_the_sub_result(int)"
});
formatter.result({
  "duration": 68095,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 28,
  "name": "Multiply",
  "description": "",
  "id": "calculator;multiply",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 29,
  "name": "entered two numbers \u003cnum1\u003e and \u003cnum2\u003e",
  "keyword": "Given "
});
formatter.step({
  "line": 30,
  "name": "multiplied two numbers \u003cprod\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 31,
  "name": "show the prod result \u003cresult\u003e",
  "keyword": "Then "
});
formatter.examples({
  "line": 33,
  "name": "",
  "description": "",
  "id": "calculator;multiply;",
  "rows": [
    {
      "cells": [
        "num1",
        "num2",
        "prod",
        "result"
      ],
      "line": 34,
      "id": "calculator;multiply;;1"
    },
    {
      "cells": [
        "2",
        "2",
        "4",
        "4"
      ],
      "line": 35,
      "id": "calculator;multiply;;2"
    },
    {
      "cells": [
        "5",
        "6",
        "30",
        "30"
      ],
      "line": 36,
      "id": "calculator;multiply;;3"
    },
    {
      "cells": [
        "7",
        "2",
        "14",
        "14"
      ],
      "line": 37,
      "id": "calculator;multiply;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 35,
  "name": "Multiply",
  "description": "",
  "id": "calculator;multiply;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 29,
  "name": "entered two numbers 2 and 2",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 30,
  "name": "multiplied two numbers 4",
  "matchedColumns": [
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 31,
  "name": "show the prod result 4",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 20
    },
    {
      "val": "2",
      "offset": 26
    }
  ],
  "location": "StepDefCalculator.entered_two_numbers_and(int,int)"
});
formatter.result({
  "duration": 117731,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 23
    }
  ],
  "location": "StepDefCalculator.multiplied_two_numbers(int)"
});
formatter.result({
  "duration": 86965,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 21
    }
  ],
  "location": "StepDefCalculator.show_the_prod_result(int)"
});
formatter.result({
  "duration": 84914,
  "status": "passed"
});
formatter.scenario({
  "line": 36,
  "name": "Multiply",
  "description": "",
  "id": "calculator;multiply;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 29,
  "name": "entered two numbers 5 and 6",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 30,
  "name": "multiplied two numbers 30",
  "matchedColumns": [
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 31,
  "name": "show the prod result 30",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 20
    },
    {
      "val": "6",
      "offset": 26
    }
  ],
  "location": "StepDefCalculator.entered_two_numbers_and(int,int)"
});
formatter.result({
  "duration": 130448,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "30",
      "offset": 23
    }
  ],
  "location": "StepDefCalculator.multiplied_two_numbers(int)"
});
formatter.result({
  "duration": 234231,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "30",
      "offset": 21
    }
  ],
  "location": "StepDefCalculator.show_the_prod_result(int)"
});
formatter.result({
  "duration": 142344,
  "status": "passed"
});
formatter.scenario({
  "line": 37,
  "name": "Multiply",
  "description": "",
  "id": "calculator;multiply;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 29,
  "name": "entered two numbers 7 and 2",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 30,
  "name": "multiplied two numbers 14",
  "matchedColumns": [
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 31,
  "name": "show the prod result 14",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "7",
      "offset": 20
    },
    {
      "val": "2",
      "offset": 26
    }
  ],
  "location": "StepDefCalculator.entered_two_numbers_and(int,int)"
});
formatter.result({
  "duration": 127166,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "14",
      "offset": 23
    }
  ],
  "location": "StepDefCalculator.multiplied_two_numbers(int)"
});
formatter.result({
  "duration": 77530,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "14",
      "offset": 21
    }
  ],
  "location": "StepDefCalculator.show_the_prod_result(int)"
});
formatter.result({
  "duration": 162855,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 39,
  "name": "Divide",
  "description": "",
  "id": "calculator;divide",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 40,
  "name": "entered two numbers \u003cnum1\u003e and \u003cnum2\u003e",
  "keyword": "Given "
});
formatter.step({
  "line": 41,
  "name": "divided two numbers \u003cdiv\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 42,
  "name": "show the div result \u003cresult\u003e",
  "keyword": "Then "
});
formatter.examples({
  "line": 44,
  "name": "",
  "description": "",
  "id": "calculator;divide;",
  "rows": [
    {
      "cells": [
        "num1",
        "num2",
        "div",
        "result"
      ],
      "line": 45,
      "id": "calculator;divide;;1"
    },
    {
      "cells": [
        "2",
        "2",
        "0",
        "0"
      ],
      "line": 46,
      "id": "calculator;divide;;2"
    },
    {
      "cells": [
        "5",
        "6",
        "0",
        "0"
      ],
      "line": 47,
      "id": "calculator;divide;;3"
    },
    {
      "cells": [
        "7",
        "2",
        "3",
        "3"
      ],
      "line": 48,
      "id": "calculator;divide;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 46,
  "name": "Divide",
  "description": "",
  "id": "calculator;divide;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 40,
  "name": "entered two numbers 2 and 2",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 41,
  "name": "divided two numbers 0",
  "matchedColumns": [
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 42,
  "name": "show the div result 0",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 20
    },
    {
      "val": "2",
      "offset": 26
    }
  ],
  "location": "StepDefCalculator.entered_two_numbers_and(int,int)"
});
formatter.result({
  "duration": 142344,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 20
    }
  ],
  "location": "StepDefCalculator.divided_two_numbers(int)"
});
formatter.result({
  "duration": 101323,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 20
    }
  ],
  "location": "StepDefCalculator.show_the_div_result(int)"
});
formatter.result({
  "duration": 97220,
  "status": "passed"
});
formatter.scenario({
  "line": 47,
  "name": "Divide",
  "description": "",
  "id": "calculator;divide;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 40,
  "name": "entered two numbers 5 and 6",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 41,
  "name": "divided two numbers 0",
  "matchedColumns": [
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 42,
  "name": "show the div result 0",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 20
    },
    {
      "val": "6",
      "offset": 26
    }
  ],
  "location": "StepDefCalculator.entered_two_numbers_and(int,int)"
});
formatter.result({
  "duration": 124294,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 20
    }
  ],
  "location": "StepDefCalculator.divided_two_numbers(int)"
});
formatter.result({
  "duration": 83273,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 20
    }
  ],
  "location": "StepDefCalculator.show_the_div_result(int)"
});
formatter.result({
  "duration": 67275,
  "status": "passed"
});
formatter.scenario({
  "line": 48,
  "name": "Divide",
  "description": "",
  "id": "calculator;divide;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 40,
  "name": "entered two numbers 7 and 2",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 41,
  "name": "divided two numbers 3",
  "matchedColumns": [
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 42,
  "name": "show the div result 3",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "7",
      "offset": 20
    },
    {
      "val": "2",
      "offset": 26
    }
  ],
  "location": "StepDefCalculator.entered_two_numbers_and(int,int)"
});
formatter.result({
  "duration": 114449,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 20
    }
  ],
  "location": "StepDefCalculator.divided_two_numbers(int)"
});
formatter.result({
  "duration": 71376,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 20
    }
  ],
  "location": "StepDefCalculator.show_the_div_result(int)"
});
formatter.result({
  "duration": 82863,
  "status": "passed"
});
formatter.uri("com/cg/trg/resources/login.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: Swarup Talukdar"
    }
  ],
  "line": 2,
  "name": "User Login",
  "description": "For valid username and password navigate to main page",
  "id": "user-login",
  "keyword": "Feature"
});
formatter.background({
  "line": 6,
  "name": "Background Successful",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "entered userb and passb",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "valid userb and passb",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "executed in background",
  "keyword": "Then "
});
formatter.match({
  "location": "StepdefBack.entered_userb_and_passb()"
});
formatter.result({
  "duration": 109117,
  "status": "passed"
});
formatter.match({
  "location": "StepdefBack.valid_userb_and_passb()"
});
formatter.result({
  "duration": 48815,
  "status": "passed"
});
formatter.match({
  "location": "StepdefBack.executed_in_background()"
});
formatter.result({
  "duration": 43482,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "User Login Successful",
  "description": "",
  "id": "user-login;user-login-successful",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 12,
  "name": "entered user and pass",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "valid user and pass",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "navigate to login successful page",
  "keyword": "Then "
});
formatter.match({
  "location": "Stepdef.entered_user_and_pass()"
});
formatter.result({
  "duration": 82863,
  "status": "passed"
});
formatter.match({
  "location": "Stepdef.valid_user_and_pass()"
});
formatter.result({
  "duration": 37739,
  "status": "passed"
});
formatter.match({
  "location": "Stepdef.navigate_to_login_successful_page()"
});
formatter.result({
  "duration": 33227,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "Background Successful",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "entered userb and passb",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "valid userb and passb",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "executed in background",
  "keyword": "Then "
});
formatter.match({
  "location": "StepdefBack.entered_userb_and_passb()"
});
formatter.result({
  "duration": 57840,
  "status": "passed"
});
formatter.match({
  "location": "StepdefBack.valid_userb_and_passb()"
});
formatter.result({
  "duration": 35688,
  "status": "passed"
});
formatter.match({
  "location": "StepdefBack.executed_in_background()"
});
formatter.result({
  "duration": 33637,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "User Login Unsuccessful",
  "description": "",
  "id": "user-login;user-login-unsuccessful",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 17,
  "name": "entered user and pass",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "invalid user and pass",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "navigate to error page",
  "keyword": "Then "
});
formatter.match({
  "location": "Stepdef.entered_user_and_pass()"
});
formatter.result({
  "duration": 73428,
  "status": "passed"
});
formatter.match({
  "location": "Stepdef.invalid_user_and_pass()"
});
formatter.result({
  "duration": 50866,
  "status": "passed"
});
formatter.match({
  "location": "Stepdef.navigate_to_error_page()"
});
formatter.result({
  "duration": 33227,
  "status": "passed"
});
formatter.uri("com/cg/trg/resources/register.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: Swarup Talukdar"
    }
  ],
  "line": 2,
  "name": "Register",
  "description": "For registered user navigate to main page",
  "id": "register",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 5,
  "name": "Registered Successfully",
  "description": "",
  "id": "register;registered-successfully",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "I entered user and pass",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I entered mobile and email",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User should be registered successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "Stepdef2.i_entered_user_and_pass()"
});
formatter.result({
  "duration": 98451,
  "status": "passed"
});
formatter.match({
  "location": "Stepdef2.i_entered_mobile_and_email()"
});
formatter.result({
  "duration": 42252,
  "status": "passed"
});
formatter.match({
  "location": "Stepdef2.user_should_be_registered_successfully()"
});
formatter.result({
  "duration": 57840,
  "status": "passed"
});
formatter.uri("com/cg/trg/resources/scenarioOutline.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: SWARUP TALUKDAR"
    }
  ],
  "line": 2,
  "name": "Find product",
  "description": "",
  "id": "find-product",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Multiply two numbers",
  "description": "",
  "id": "find-product;multiply-two-numbers",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "I entered two numbers \u003cnum1\u003e and \u003cnum2\u003e",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "multiply two numbers \u003cprod\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "show the result in \u003cresult\u003e",
  "keyword": "Then "
});
formatter.examples({
  "line": 8,
  "name": "",
  "description": "",
  "id": "find-product;multiply-two-numbers;",
  "rows": [
    {
      "cells": [
        "num1",
        "num2",
        "prod",
        "result"
      ],
      "line": 9,
      "id": "find-product;multiply-two-numbers;;1"
    },
    {
      "cells": [
        "2",
        "2",
        "4",
        "4"
      ],
      "line": 10,
      "id": "find-product;multiply-two-numbers;;2"
    },
    {
      "cells": [
        "5",
        "6",
        "30",
        "30"
      ],
      "line": 11,
      "id": "find-product;multiply-two-numbers;;3"
    },
    {
      "cells": [
        "7",
        "2",
        "14",
        "14"
      ],
      "line": 12,
      "id": "find-product;multiply-two-numbers;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 10,
  "name": "Multiply two numbers",
  "description": "",
  "id": "find-product;multiply-two-numbers;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "I entered two numbers 2 and 2",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "multiply two numbers 4",
  "matchedColumns": [
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "show the result in 4",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 22
    },
    {
      "val": "2",
      "offset": 28
    }
  ],
  "location": "StepdefBack.i_entered_two_numbers_and(int,int)"
});
formatter.result({
  "duration": 153009,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 21
    }
  ],
  "location": "StepdefBack.multiply_two_numbers(int)"
});
formatter.result({
  "duration": 104604,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 19
    }
  ],
  "location": "StepdefBack.show_the_result_in(int)"
});
formatter.result({
  "duration": 88606,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "Multiply two numbers",
  "description": "",
  "id": "find-product;multiply-two-numbers;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "I entered two numbers 5 and 6",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "multiply two numbers 30",
  "matchedColumns": [
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "show the result in 30",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 22
    },
    {
      "val": "6",
      "offset": 28
    }
  ],
  "location": "StepdefBack.i_entered_two_numbers_and(int,int)"
});
formatter.result({
  "duration": 143984,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "30",
      "offset": 21
    }
  ],
  "location": "StepdefBack.multiply_two_numbers(int)"
});
formatter.result({
  "duration": 71377,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "30",
      "offset": 19
    }
  ],
  "location": "StepdefBack.show_the_result_in(int)"
});
formatter.result({
  "duration": 76299,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Multiply two numbers",
  "description": "",
  "id": "find-product;multiply-two-numbers;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "I entered two numbers 7 and 2",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "multiply two numbers 14",
  "matchedColumns": [
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "show the result in 14",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "7",
      "offset": 22
    },
    {
      "val": "2",
      "offset": 28
    }
  ],
  "location": "StepdefBack.i_entered_two_numbers_and(int,int)"
});
formatter.result({
  "duration": 142344,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "14",
      "offset": 21
    }
  ],
  "location": "StepdefBack.multiply_two_numbers(int)"
});
formatter.result({
  "duration": 95989,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "14",
      "offset": 19
    }
  ],
  "location": "StepdefBack.show_the_result_in(int)"
});
formatter.result({
  "duration": 74248,
  "status": "passed"
});
});