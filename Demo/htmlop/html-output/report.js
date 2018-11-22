$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("resources/abc.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Name: Swarup Talukdar"
    }
  ],
  "line": 2,
  "name": "Login",
  "description": "For valid username and password navigate to main page",
  "id": "login",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 5,
  "name": "Login Successful",
  "description": "",
  "id": "login;login-successful",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "enter username and password",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "navigate to main page",
  "keyword": "Then "
});
formatter.match({
  "location": "Stepdef.enter_username_and_password()"
});
formatter.result({
  "duration": 90217138,
  "status": "passed"
});
formatter.match({
  "location": "Stepdef.navigate_to_main_page()"
});
formatter.result({
  "duration": 31586,
  "status": "passed"
});
formatter.uri("resources/calc.feature");
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
  "name": "added two numbers \u003cnum1\u003e and \u003cnum2\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "show the add result \u003cnum1\u003e + \u003cnum2\u003e",
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
        "num2"
      ],
      "line": 12,
      "id": "calculator;add;;1"
    },
    {
      "cells": [
        "2",
        "2"
      ],
      "line": 13,
      "id": "calculator;add;;2"
    },
    {
      "cells": [
        "5",
        "6"
      ],
      "line": 14,
      "id": "calculator;add;;3"
    },
    {
      "cells": [
        "7",
        "2"
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
  "name": "added two numbers 2 and 2",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "show the add result 2 + 2",
  "matchedColumns": [
    0,
    1
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
  "location": "StepDefCalc.entered_two_numbers_and(int,int)"
});
formatter.result({
  "duration": 1969018,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 18
    },
    {
      "val": "2",
      "offset": 24
    }
  ],
  "location": "StepDefCalc.added_two_numbers_and(int,int)"
});
formatter.result({
  "duration": 108296,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 20
    },
    {
      "val": "2",
      "offset": 24
    }
  ],
  "location": "StepDefCalc.show_the_add_result(int,int)"
});
formatter.result({
  "duration": 102963,
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
  "name": "added two numbers 5 and 6",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "show the add result 5 + 6",
  "matchedColumns": [
    0,
    1
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
  "location": "StepDefCalc.entered_two_numbers_and(int,int)"
});
formatter.result({
  "duration": 123474,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 18
    },
    {
      "val": "6",
      "offset": 24
    }
  ],
  "location": "StepDefCalc.added_two_numbers_and(int,int)"
});
formatter.result({
  "duration": 101733,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 20
    },
    {
      "val": "6",
      "offset": 24
    }
  ],
  "location": "StepDefCalc.show_the_add_result(int,int)"
});
formatter.result({
  "duration": 117320,
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
  "name": "added two numbers 7 and 2",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "show the add result 7 + 2",
  "matchedColumns": [
    0,
    1
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
  "location": "StepDefCalc.entered_two_numbers_and(int,int)"
});
formatter.result({
  "duration": 137831,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "7",
      "offset": 18
    },
    {
      "val": "2",
      "offset": 24
    }
  ],
  "location": "StepDefCalc.added_two_numbers_and(int,int)"
});
formatter.result({
  "duration": 118552,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "7",
      "offset": 20
    },
    {
      "val": "2",
      "offset": 24
    }
  ],
  "location": "StepDefCalc.show_the_add_result(int,int)"
});
formatter.result({
  "duration": 95990,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 17,
  "name": "Subtract",
  "description": "",
  "id": "calculator;subtract",
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
  "name": "subtracted two numbers \u003cnum1\u003e and \u003cnum2\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "show the sub result \u003cnum1\u003e - \u003cnum2\u003e",
  "keyword": "Then "
});
formatter.examples({
  "line": 22,
  "name": "",
  "description": "",
  "id": "calculator;subtract;",
  "rows": [
    {
      "cells": [
        "num1",
        "num2"
      ],
      "line": 23,
      "id": "calculator;subtract;;1"
    },
    {
      "cells": [
        "2",
        "2"
      ],
      "line": 24,
      "id": "calculator;subtract;;2"
    },
    {
      "cells": [
        "6",
        "5"
      ],
      "line": 25,
      "id": "calculator;subtract;;3"
    },
    {
      "cells": [
        "7",
        "2"
      ],
      "line": 26,
      "id": "calculator;subtract;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 24,
  "name": "Subtract",
  "description": "",
  "id": "calculator;subtract;;2",
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
  "name": "subtracted two numbers 2 and 2",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "show the sub result 2 - 2",
  "matchedColumns": [
    0,
    1
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
  "location": "StepDefCalc.entered_two_numbers_and(int,int)"
});
formatter.result({
  "duration": 178032,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 23
    },
    {
      "val": "2",
      "offset": 29
    }
  ],
  "location": "StepDefCalc.subtracted_two_numbers_and(int,int)"
});
formatter.result({
  "duration": 107066,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 20
    },
    {
      "val": "2",
      "offset": 24
    }
  ],
  "location": "StepDefCalc.show_the_sub_result(int,int)"
});
formatter.result({
  "duration": 82042,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "Subtract",
  "description": "",
  "id": "calculator;subtract;;3",
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
  "name": "subtracted two numbers 6 and 5",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "show the sub result 6 - 5",
  "matchedColumns": [
    0,
    1
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
  "location": "StepDefCalc.entered_two_numbers_and(int,int)"
});
formatter.result({
  "duration": 192800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "6",
      "offset": 23
    },
    {
      "val": "5",
      "offset": 29
    }
  ],
  "location": "StepDefCalc.subtracted_two_numbers_and(int,int)"
});
formatter.result({
  "duration": 95579,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "6",
      "offset": 20
    },
    {
      "val": "5",
      "offset": 24
    }
  ],
  "location": "StepDefCalc.show_the_sub_result(int,int)"
});
formatter.result({
  "duration": 87375,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "Subtract",
  "description": "",
  "id": "calculator;subtract;;4",
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
  "name": "subtracted two numbers 7 and 2",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "show the sub result 7 - 2",
  "matchedColumns": [
    0,
    1
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
  "location": "StepDefCalc.entered_two_numbers_and(int,int)"
});
formatter.result({
  "duration": 142343,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "7",
      "offset": 23
    },
    {
      "val": "2",
      "offset": 29
    }
  ],
  "location": "StepDefCalc.subtracted_two_numbers_and(int,int)"
});
formatter.result({
  "duration": 100912,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "7",
      "offset": 20
    },
    {
      "val": "2",
      "offset": 24
    }
  ],
  "location": "StepDefCalc.show_the_sub_result(int,int)"
});
formatter.result({
  "duration": 98451,
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
  "name": "multiplied two numbers \u003cnum1\u003e and \u003cnum2\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 31,
  "name": "show the prod result \u003cnum1\u003e * \u003cnum2\u003e",
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
        "num2"
      ],
      "line": 34,
      "id": "calculator;multiply;;1"
    },
    {
      "cells": [
        "2",
        "2"
      ],
      "line": 35,
      "id": "calculator;multiply;;2"
    },
    {
      "cells": [
        "5",
        "6"
      ],
      "line": 36,
      "id": "calculator;multiply;;3"
    },
    {
      "cells": [
        "7",
        "2"
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
  "name": "multiplied two numbers 2 and 2",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 31,
  "name": "show the prod result 2 * 2",
  "matchedColumns": [
    0,
    1
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
  "location": "StepDefCalc.entered_two_numbers_and(int,int)"
});
formatter.result({
  "duration": 118142,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 23
    },
    {
      "val": "2",
      "offset": 29
    }
  ],
  "location": "StepDefCalc.multiplied_two_numbers_and(int,int)"
});
formatter.result({
  "duration": 150138,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 21
    },
    {
      "val": "2",
      "offset": 25
    }
  ],
  "location": "StepDefCalc.show_the_prod_result(int,int)"
});
formatter.result({
  "duration": 105015,
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
  "name": "multiplied two numbers 5 and 6",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 31,
  "name": "show the prod result 5 * 6",
  "matchedColumns": [
    0,
    1
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
  "location": "StepDefCalc.entered_two_numbers_and(int,int)"
});
formatter.result({
  "duration": 118961,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 23
    },
    {
      "val": "6",
      "offset": 29
    }
  ],
  "location": "StepDefCalc.multiplied_two_numbers_and(int,int)"
});
formatter.result({
  "duration": 92298,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 21
    },
    {
      "val": "6",
      "offset": 25
    }
  ],
  "location": "StepDefCalc.show_the_prod_result(int,int)"
});
formatter.result({
  "duration": 81222,
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
  "name": "multiplied two numbers 7 and 2",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 31,
  "name": "show the prod result 7 * 2",
  "matchedColumns": [
    0,
    1
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
  "location": "StepDefCalc.entered_two_numbers_and(int,int)"
});
formatter.result({
  "duration": 111578,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "7",
      "offset": 23
    },
    {
      "val": "2",
      "offset": 29
    }
  ],
  "location": "StepDefCalc.multiplied_two_numbers_and(int,int)"
});
formatter.result({
  "duration": 101732,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "7",
      "offset": 21
    },
    {
      "val": "2",
      "offset": 25
    }
  ],
  "location": "StepDefCalc.show_the_prod_result(int,int)"
});
formatter.result({
  "duration": 86554,
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
  "name": "divided two numbers \u003cnum1\u003e and \u003cnum2\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 42,
  "name": "show the div result \u003cnum1\u003e / \u003cnum2\u003e",
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
        "num2"
      ],
      "line": 45,
      "id": "calculator;divide;;1"
    },
    {
      "cells": [
        "2",
        "2"
      ],
      "line": 46,
      "id": "calculator;divide;;2"
    },
    {
      "cells": [
        "5",
        "6"
      ],
      "line": 47,
      "id": "calculator;divide;;3"
    },
    {
      "cells": [
        "7",
        "2"
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
  "name": "divided two numbers 2 and 2",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 42,
  "name": "show the div result 2 / 2",
  "matchedColumns": [
    0,
    1
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
  "location": "StepDefCalc.entered_two_numbers_and(int,int)"
});
formatter.result({
  "duration": 116500,
  "status": "passed"
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
  "location": "StepDefCalc.divided_two_numbers_and(int,int)"
});
formatter.result({
  "duration": 104194,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 20
    },
    {
      "val": "2",
      "offset": 24
    }
  ],
  "location": "StepDefCalc.show_the_div_result(int,int)"
});
formatter.result({
  "duration": 86965,
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
  "name": "divided two numbers 5 and 6",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 42,
  "name": "show the div result 5 / 6",
  "matchedColumns": [
    0,
    1
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
  "location": "StepDefCalc.entered_two_numbers_and(int,int)"
});
formatter.result({
  "duration": 107886,
  "status": "passed"
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
  "location": "StepDefCalc.divided_two_numbers_and(int,int)"
});
formatter.result({
  "duration": 91477,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 20
    },
    {
      "val": "6",
      "offset": 24
    }
  ],
  "location": "StepDefCalc.show_the_div_result(int,int)"
});
formatter.result({
  "duration": 84504,
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
  "name": "divided two numbers 7 and 2",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 42,
  "name": "show the div result 7 / 2",
  "matchedColumns": [
    0,
    1
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
  "location": "StepDefCalc.entered_two_numbers_and(int,int)"
});
formatter.result({
  "duration": 127986,
  "status": "passed"
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
  "location": "StepDefCalc.divided_two_numbers_and(int,int)"
});
formatter.result({
  "duration": 118961,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "7",
      "offset": 20
    },
    {
      "val": "2",
      "offset": 24
    }
  ],
  "location": "StepDefCalc.show_the_div_result(int,int)"
});
formatter.result({
  "duration": 101733,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 50,
  "name": "Add call",
  "description": "",
  "id": "calculator;add-call",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 51,
  "name": "entered two numbers \u003cnum1\u003e and \u003cnum2\u003e to add",
  "keyword": "Given "
});
formatter.step({
  "line": 52,
  "name": "add two numbers \u003cadd\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 53,
  "name": "show the result \u003cres\u003e",
  "keyword": "Then "
});
formatter.examples({
  "line": 54,
  "name": "",
  "description": "",
  "id": "calculator;add-call;",
  "rows": [
    {
      "cells": [
        "num1",
        "num2"
      ],
      "line": 55,
      "id": "calculator;add-call;;1"
    },
    {
      "cells": [
        "2",
        "2"
      ],
      "line": 56,
      "id": "calculator;add-call;;2"
    },
    {
      "cells": [
        "5",
        "6"
      ],
      "line": 57,
      "id": "calculator;add-call;;3"
    },
    {
      "cells": [
        "7",
        "2"
      ],
      "line": 58,
      "id": "calculator;add-call;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 56,
  "name": "Add call",
  "description": "",
  "id": "calculator;add-call;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 51,
  "name": "entered two numbers 2 and 2 to add",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 52,
  "name": "add two numbers \u003cadd\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 53,
  "name": "show the result \u003cres\u003e",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "location": "StepDefCalc.add_two_numbers_add()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefCalc.show_the_result_res()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 57,
  "name": "Add call",
  "description": "",
  "id": "calculator;add-call;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 51,
  "name": "entered two numbers 5 and 6 to add",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 52,
  "name": "add two numbers \u003cadd\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 53,
  "name": "show the result \u003cres\u003e",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "location": "StepDefCalc.add_two_numbers_add()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefCalc.show_the_result_res()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 58,
  "name": "Add call",
  "description": "",
  "id": "calculator;add-call;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 51,
  "name": "entered two numbers 7 and 2 to add",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 52,
  "name": "add two numbers \u003cadd\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 53,
  "name": "show the result \u003cres\u003e",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "location": "StepDefCalc.add_two_numbers_add()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefCalc.show_the_result_res()"
});
formatter.result({
  "status": "skipped"
});
});