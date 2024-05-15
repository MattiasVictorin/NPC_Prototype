var storyContent = ﻿{"inkVersion":20,"root":[["\n","\n","\n","\n","\n","\n",{"->":"Start_scene"},["done",{"#f":5,"#n":"g-0"}],null],"done",{"pop_random":[{"temp=":"list"},"ev",{"VAR?":"list"},"lrnd","/ev",{"temp=":"el"},"\n","ev",{"VAR?":"list"},{"VAR?":"el"},"-",{"temp=":"list","re":true},"/ev","ev",{"VAR?":"el"},"/ev","~ret",{"#f":1}],"present_adjectives":[{"temp=":"list"},"ev",{"VAR?":"list"},"LIST_MIN","/ev",{"temp=":"adjective"},"\n","ev",{"VAR?":"list"},{"VAR?":"adjective"},"-",{"temp=":"list","re":true},"/ev","ev",{"VAR?":"adjective"},"/ev","~ret",{"#f":1}],"Start_scene":[["^Welcome to the test site! You, a robot quality assurance specialist, have been sent here to evaluate four service robot prototypes. The robots all look the same; humanoid, genderless, of regular height, and with fully expressive faces. Each robot behaves differently, and your job will be to interact with each robot, observe their behavior, and fill out a questionnaire about how they behave after each encounter.","\n","^The robots will be numbered, but will be presented to you in a randomized order. You can command the robots to do four different actions, and you must have them perform all four actions at least once before moving on to the next robot.","\n","^Once you have met with and evaluated each robot, you will be asked to fill out a questionnaire about your experience of the scenario.","\n","^Are you ready to get started?","\n","ev","str","^- Yes, let's do it!","/str","/ev",{"*":".^.c-0","flg":4},{"c-0":["^ ",{"->":".^.^.Test_starts"},"\n",{"->":".^.^.Test_starts"},{"#f":5}],"Test_starts":["^You enter the test room, a clipboard and pen in your hands. The room is mostly empty apart from a small table with a number of boxes next to it on the floor, and a whiteboard. The boxes are the size of shoe boxes and appear empty. The whiteboard has two black markers stuck to it with magnets. You walk over to the table and await the first robot.","\n",["ev",{"^->":"Start_scene.0.Test_starts.2.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":18},{"s":["^- Ask the robot to enter the room",{"->":"$r","var":true},null]}],{"c-1":["ev",{"^->":"Start_scene.0.Test_starts.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.2.s"},[{"#n":"$r2"}],"\n",{"->":".^.^.^.^.Random_robot"},{"#f":5}],"#f":5}]}],{"Random_robot":["ev",{"VAR?":"Robot_list"},"LIST_COUNT",0,">","/ev",[{"->":".^.b","c":true},{"b":["\n","ev",{"^var":"Robot_list","ci":-1},{"f()":"pop_random"},"/ev",{"VAR=":"Current_robot","re":true},"\n",{"->":".^.^.^.8"},null]}],[{"->":".^.b"},{"b":["\n",{"->":"End_scene"},{"->":".^.^.^.8"},null]}],"nop","\n","ev",{"VAR?":"Current_robot"},"/ev",["du","ev",{"VAR?":"Robot_var_1"},"==","/ev",{"->":".^.b","c":true},{"b":["pop","\n",{"->":"Robot_1"},{"->":".^.^.^.18"},null]}],["du","ev",{"VAR?":"Robot_var_2"},"==","/ev",{"->":".^.b","c":true},{"b":["pop","\n",{"->":"Robot_2"},{"->":".^.^.^.18"},null]}],["du","ev",{"VAR?":"Robot_var_3"},"==","/ev",{"->":".^.b","c":true},{"b":["pop","\n",{"->":"Robot_3"},{"->":".^.^.^.18"},null]}],["du","ev",{"VAR?":"Robot_var_4"},"==","/ev",{"->":".^.b","c":true},{"b":["pop","\n",{"->":"Robot_4"},{"->":".^.^.^.18"},null]}],[{"->":".^.b"},{"b":["pop","\n",{"->":"End_scene"},{"->":".^.^.^.18"},null]}],"nop","\n","end",{"#f":1}],"#f":1}],"End_scene":["^With the last robot gone, the evaluation is complete. Please follow the link below to complete a questionnaire about your experience. DO NOT CLOSE THIS WINDOW, you may need to refer to the text in this scenario for the questionnaire.","\n","^<a href=\"https://docs.google.com/forms/d/e/1FAIpQLScO1pfsuv_IAoWGIC94zl_TBMLEii2UFiBdT1rarQgtqMOfZQ/viewform?usp=pp_url&entry.606604235=","ev",{"VAR?":"RobotRatings"},"out","/ev","^\" target=\"_blank\" rel=\"noopener noreferrer\">Click here to go to the questionnaire</a>","\n","end",{"#f":1}],"Robot_1":["ev",{"VAR?":"RobotRatings"},"str","^-1-","/str","+",{"VAR=":"RobotRatings","re":true},"/ev","^<center><b>-------------Robot #1-------------</b></center>","\n","^The robot walks into the room, its shoulders forward in a slight slouch, and walks over to the side of the table. With its head tilted slightly forward it looks over at you cautiously.","\n",{"->":"Command_Robot_1"},{"#f":1}],"Command_Robot_1":[[["ev",{"^->":"Command_Robot_1.0.0.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str",{"CNT?":".^.^.^.Draw_circle"},3,"<","/ev",{"*":".^.^.c-0","flg":3},{"s":["^- Ask the robot to draw a circle on the whiteboard ",{"->":"$r","var":true},null]}],["ev",{"^->":"Command_Robot_1.0.1.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str",{"CNT?":".^.^.^.Pick_up_box"},3,"<","/ev",{"*":".^.^.c-1","flg":3},{"s":["^- Ask the robot to pick up a box from the floor and place it on the table",{"->":"$r","var":true},null]}],["ev",{"^->":"Command_Robot_1.0.2.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str",{"CNT?":".^.^.^.Walk_around_table"},3,"<","/ev",{"*":".^.^.c-2","flg":3},{"s":["^- Ask the robot to walk around the table",{"->":"$r","var":true},null]}],["ev",{"^->":"Command_Robot_1.0.3.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str",{"CNT?":".^.^.^.Shake_hand"},3,"<","/ev",{"*":".^.^.c-3","flg":3},{"s":["^- Ask the robot to shake your hand ",{"->":"$r","var":true},null]}],["ev",{"^->":"Command_Robot_1.0.4.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str",{"CNT?":".^.^.^.Draw_circle"},{"CNT?":".^.^.^.Pick_up_box"},"&&",{"CNT?":".^.^.^.Walk_around_table"},"&&",{"CNT?":".^.^.^.Shake_hand"},"&&","/ev",{"*":".^.^.c-4","flg":19},{"s":["^- Ask robot to leave the room ",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"Command_Robot_1.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.0.s"},[{"#n":"$r2"}],"\n",{"->":".^.^.^.Draw_circle"},{"#f":5}],"c-1":["ev",{"^->":"Command_Robot_1.0.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.1.s"},[{"#n":"$r2"}],"\n",{"->":".^.^.^.Pick_up_box"},{"#f":5}],"c-2":["ev",{"^->":"Command_Robot_1.0.c-2.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.2.s"},[{"#n":"$r2"}],"\n",{"->":".^.^.^.Walk_around_table"},{"#f":5}],"c-3":["ev",{"^->":"Command_Robot_1.0.c-3.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.3.s"},[{"#n":"$r2"}],"\n",{"->":".^.^.^.Shake_hand"},{"#f":5}],"c-4":["ev",{"^->":"Command_Robot_1.0.c-4.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.4.s"},[{"#n":"$r2"}],"\n",{"->":".^.^.^.Robot_1_leaves"},{"#f":5}]}],{"Draw_circle":["^The robot paces over to the whiteboard and picks up a pen. It hastily draws a small circle on the board and fidgets with the pen a bit before placing it back on the board.","\n",{"->":".^.^"},{"#f":1}],"Pick_up_box":["^The robot immediately walks over to one of the boxes and leans over to pick it up. With its elbows up against the side of its body, the robot raises the box up off of the floor and places it on the table.","\n",{"->":".^.^"},{"#f":1}],"Walk_around_table":["^The robot moves briskly around the table, in a wide arch around you, and stops after reaching its starting position.","\n",{"->":".^.^"},{"#f":1}],"Shake_hand":["^Approaching you, the robot wipes its hand on its leg and extends it to greet you. Its eyes briefly meeting yours, it shakes your hand and gives it a small squeeze.","\n",{"->":".^.^"},{"#f":1}],"Robot_1_leaves":["^The robot nods and scratches the side of its cheek, and quickly makes its way out through the exit.","\n",{"->":"Rate_Robot_1"},{"#f":1}],"#f":1}],"Rate_Robot_1":[["ev",1,"/ev",{"VAR=":"Loop_count","re":true},"^When the robot has left, you bring up your clipboard to fill in your evaluation of robot #1. The evaluation reads as follows:","\n","^On a scale of 1 to 5, where 1 is \"Not accurate\" and 5 is \"Very accurate\", how well do the following words describe the robot you just interacted with?","\n",{"->":".^.Top_of_adjective_loop"},["ev",{"VAR?":"Robot_personality"},"LIST_COUNT",{"VAR?":"Loop_count"},"<","/ev",[{"->":".^.b","c":true},{"b":["\n",{"->":".^.^.^.^.Next_robot"},{"->":".^.^.^.8"},null]}],[{"->":".^.b"},{"b":["\n",{"->":".^.^.^.Rating_part"},{"->":".^.^.^.8"},null]}],"nop","\n",["ev","^Robot_personality",{"VAR?":"Loop_count"},"listInt","out","/ev","\n","ev",{"VAR?":"Loop_count"},1,"+",{"VAR=":"Loop_count","re":true},"/ev","ev","str","^1","/str","/ev",{"*":".^.c-0","flg":4},"ev","str","^2","/str","/ev",{"*":".^.c-1","flg":4},"ev","str","^3","/str","/ev",{"*":".^.c-2","flg":4},"ev","str","^4","/str","/ev",{"*":".^.c-3","flg":4},"ev","str","^5","/str","/ev",{"*":".^.c-4","flg":4},{"c-0":["\n","ev",{"VAR?":"RobotRatings"},"str","^1","/str","+",{"VAR=":"RobotRatings","re":true},"/ev",{"->":".^.^.^"},{"->":".^.^.^.^.Next_robot"},{"#f":5}],"c-1":["^  ","\n","ev",{"VAR?":"RobotRatings"},"str","^2","/str","+",{"VAR=":"RobotRatings","re":true},"/ev",{"->":".^.^.^"},{"->":".^.^.^.^.Next_robot"},{"#f":5}],"c-2":["^  ","\n","ev",{"VAR?":"RobotRatings"},"str","^3","/str","+",{"VAR=":"RobotRatings","re":true},"/ev",{"->":".^.^.^"},{"->":".^.^.^.^.Next_robot"},{"#f":5}],"c-3":["^  ","\n","ev",{"VAR?":"RobotRatings"},"str","^4","/str","+",{"VAR=":"RobotRatings","re":true},"/ev",{"->":".^.^.^"},{"->":".^.^.^.^.Next_robot"},{"#f":5}],"c-4":["^  ","\n","ev",{"VAR?":"RobotRatings"},"str","^5","/str","+",{"VAR=":"RobotRatings","re":true},"/ev",{"->":".^.^.^"},{"->":".^.^.^.^.Next_robot"},{"#f":5}],"#f":5,"#n":"Rating_part"}],{"#f":5,"#n":"Top_of_adjective_loop"}],{"Next_robot":[["ev",{"^->":"Rate_Robot_1.0.Next_robot.0.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str",{"VAR?":"Robot_list"},"LIST_COUNT",0,">","/ev",{"*":".^.^.c-5","flg":3},{"s":["^- Ask to send the next robot in ",{"->":"$r","var":true},null]}],"ev","str","^Leave the room and end the test","/str",{"VAR?":"Robot_list"},"LIST_COUNT",0,"==","/ev",{"*":".^.c-6","flg":5},{"c-5":["ev",{"^->":"Rate_Robot_1.0.Next_robot.c-5.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.0.s"},[{"#n":"$r2"}],{"->":"Start_scene.Random_robot"},"\n",{"#f":5}],"c-6":["^ ",{"->":"End_scene"},"\n","end",{"#f":5}],"#f":5}]}],{"#f":1}],"Robot_2":["ev",{"VAR?":"RobotRatings"},"str","^-2-","/str","+",{"VAR=":"RobotRatings","re":true},"/ev","^<center><b>-------------Robot #2-------------</b></center>","\n","^The robot slowly enters the room through the doorway, making eye contact with you as it enters. With long deliberate strides it makes its way over to the table, quite close to where you're standing. You take a step back to be at a comfortable distance and observe the robot. It rolls its shoulders back and stands up straight awaiting a command.","\n",{"->":"Command_Robot_2"},{"#f":1}],"Command_Robot_2":[[["ev",{"^->":"Command_Robot_2.0.0.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str",{"CNT?":".^.^.^.Draw_circle"},3,"<","/ev",{"*":".^.^.c-0","flg":3},{"s":["^- Ask the robot to draw a circle on the whiteboard ",{"->":"$r","var":true},null]}],["ev",{"^->":"Command_Robot_2.0.1.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str",{"CNT?":".^.^.^.Pick_up_box"},3,"<","/ev",{"*":".^.^.c-1","flg":3},{"s":["^- Ask the robot to pick up a box from the floor and place it on the table",{"->":"$r","var":true},null]}],["ev",{"^->":"Command_Robot_2.0.2.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str",{"CNT?":".^.^.^.Walk_around_table"},3,"<","/ev",{"*":".^.^.c-2","flg":3},{"s":["^- Ask the robot to walk around the table",{"->":"$r","var":true},null]}],["ev",{"^->":"Command_Robot_2.0.3.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str",{"CNT?":".^.^.^.Shake_hand"},3,"<","/ev",{"*":".^.^.c-3","flg":3},{"s":["^- Ask the robot to shake your hand ",{"->":"$r","var":true},null]}],["ev",{"^->":"Command_Robot_2.0.4.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str",{"CNT?":".^.^.^.Draw_circle"},{"CNT?":".^.^.^.Pick_up_box"},"&&",{"CNT?":".^.^.^.Walk_around_table"},"&&",{"CNT?":".^.^.^.Shake_hand"},"&&","/ev",{"*":".^.^.c-4","flg":19},{"s":["^- Ask robot to leave the room ",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"Command_Robot_2.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.0.s"},[{"#n":"$r2"}],"\n",{"->":".^.^.^.Draw_circle"},{"#f":5}],"c-1":["ev",{"^->":"Command_Robot_2.0.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.1.s"},[{"#n":"$r2"}],"\n",{"->":".^.^.^.Pick_up_box"},{"#f":5}],"c-2":["ev",{"^->":"Command_Robot_2.0.c-2.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.2.s"},[{"#n":"$r2"}],"\n",{"->":".^.^.^.Walk_around_table"},{"#f":5}],"c-3":["ev",{"^->":"Command_Robot_2.0.c-3.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.3.s"},[{"#n":"$r2"}],"\n",{"->":".^.^.^.Shake_hand"},{"#f":5}],"c-4":["ev",{"^->":"Command_Robot_2.0.c-4.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.4.s"},[{"#n":"$r2"}],"\n",{"->":".^.^.^.Robot_2_leaves"},{"#f":5}]}],{"Draw_circle":["^The robot calmly approaches the whiteboard and picks up one of the pens. It draws a large circle on the whiteboard, and places the pen back on the board before returning its gaze to you.","\n",{"->":".^.^"},{"#f":1}],"Pick_up_box":["^The robot pauses for a second. It then walks over to one of the boxes, and in one continuous movement bends down, picks the box up with both hands, and places it gently on the table.","\n",{"->":".^.^"},{"#f":1}],"Walk_around_table":["^The robot slowly turns its head to survey the table. It then moves around the table, swinging its arms as it walks. You move out of the way as it passes to keep it from bumping into you. After it has returned to its starting position, it stops and turns to you and tilts its head quizzically.","\n",{"->":".^.^"},{"#f":1}],"Shake_hand":["^With its head tilted slightly back, the robot makes eye contact with you and slowly extends its arm and grabs your hand. The handshake is firm and commanding. The robot then retracts its hand and lets its arm fall along the side of its body.","\n",{"->":".^.^"},{"#f":1}],"Robot_2_leaves":["^The robot briefly looks you up and down. It nods slightly as it looks you in the eyes and after a brief pause it turns to the exit. With a graceful gait it walks towards the doorway and exits the room.","\n",{"->":"Rate_Robot_2"},{"#f":1}],"#f":1}],"Rate_Robot_2":[["ev",1,"/ev",{"VAR=":"Loop_count","re":true},"^When the robot has left, you bring up your clipboard to fill in your evaluation of robot #2. The evaluation reads as follows:","\n","^On a scale of 1 to 5, where 1 is \"Not accurate\" and 5 is \"Very accurate\", how well do the following words describe the robot you just interacted with?","\n",{"->":".^.Top_of_adjective_loop"},["ev",{"VAR?":"Robot_personality"},"LIST_COUNT",{"VAR?":"Loop_count"},"<","/ev",[{"->":".^.b","c":true},{"b":["\n",{"->":".^.^.^.^.Next_robot"},{"->":".^.^.^.8"},null]}],[{"->":".^.b"},{"b":["\n",{"->":".^.^.^.Rating_part"},{"->":".^.^.^.8"},null]}],"nop","\n",["ev","^Robot_personality",{"VAR?":"Loop_count"},"listInt","out","/ev","\n","ev",{"VAR?":"Loop_count"},1,"+",{"VAR=":"Loop_count","re":true},"/ev","ev","str","^1","/str","/ev",{"*":".^.c-0","flg":4},"ev","str","^2","/str","/ev",{"*":".^.c-1","flg":4},"ev","str","^3","/str","/ev",{"*":".^.c-2","flg":4},"ev","str","^4","/str","/ev",{"*":".^.c-3","flg":4},"ev","str","^5","/str","/ev",{"*":".^.c-4","flg":4},{"c-0":["\n","ev",{"VAR?":"RobotRatings"},"str","^1","/str","+",{"VAR=":"RobotRatings","re":true},"/ev",{"->":".^.^.^"},{"->":".^.^.^.^.Next_robot"},{"#f":5}],"c-1":["^  ","\n","ev",{"VAR?":"RobotRatings"},"str","^2","/str","+",{"VAR=":"RobotRatings","re":true},"/ev",{"->":".^.^.^"},{"->":".^.^.^.^.Next_robot"},{"#f":5}],"c-2":["^  ","\n","ev",{"VAR?":"RobotRatings"},"str","^3","/str","+",{"VAR=":"RobotRatings","re":true},"/ev",{"->":".^.^.^"},{"->":".^.^.^.^.Next_robot"},{"#f":5}],"c-3":["^  ","\n","ev",{"VAR?":"RobotRatings"},"str","^4","/str","+",{"VAR=":"RobotRatings","re":true},"/ev",{"->":".^.^.^"},{"->":".^.^.^.^.Next_robot"},{"#f":5}],"c-4":["^  ","\n","ev",{"VAR?":"RobotRatings"},"str","^5","/str","+",{"VAR=":"RobotRatings","re":true},"/ev",{"->":".^.^.^"},{"->":".^.^.^.^.Next_robot"},{"#f":5}],"#f":5,"#n":"Rating_part"}],{"#f":5,"#n":"Top_of_adjective_loop"}],{"Next_robot":[["ev",{"^->":"Rate_Robot_2.0.Next_robot.0.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str",{"VAR?":"Robot_list"},"LIST_COUNT",0,">","/ev",{"*":".^.^.c-5","flg":3},{"s":["^- Ask to send the next robot in ",{"->":"$r","var":true},null]}],["ev",{"^->":"Rate_Robot_2.0.Next_robot.1.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","str","^Leave the room and end the test","/str",{"VAR?":"Robot_list"},"LIST_COUNT",0,"==","/ev",{"*":".^.^.c-6","flg":7},{"s":["^- ",{"->":"$r","var":true},null]}],{"c-5":["ev",{"^->":"Rate_Robot_2.0.Next_robot.c-5.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.0.s"},[{"#n":"$r2"}],{"->":"Start_scene.Random_robot"},"\n",{"#f":5}],"c-6":["ev",{"^->":"Rate_Robot_2.0.Next_robot.c-6.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.1.s"},[{"#n":"$r2"}],"^ ",{"->":"End_scene"},"\n","end",{"#f":5}],"#f":5}]}],{"#f":1}],"Robot_3":["ev",{"VAR?":"RobotRatings"},"str","^-3-","/str","+",{"VAR=":"RobotRatings","re":true},"/ev","^<center><b>-------------Robot #3-------------</b></center>","\n","^The robot enters the room, slightly hunched over, and looks around the room. Upon seeing you it gives you a wide-eyed stare and walks over to the table close to where you are standing.","\n",{"->":"Command_Robot_3"},{"#f":1}],"Command_Robot_3":[[["ev",{"^->":"Command_Robot_3.0.0.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str",{"CNT?":".^.^.^.Draw_circle"},3,"<","/ev",{"*":".^.^.c-0","flg":3},{"s":["^- Ask the robot to draw a circle on the whiteboard ",{"->":"$r","var":true},null]}],["ev",{"^->":"Command_Robot_3.0.1.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str",{"CNT?":".^.^.^.Pick_up_box"},3,"<","/ev",{"*":".^.^.c-1","flg":3},{"s":["^- Ask the robot to pick up a box from the floor and place it on the table",{"->":"$r","var":true},null]}],["ev",{"^->":"Command_Robot_3.0.2.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str",{"CNT?":".^.^.^.Walk_around_table"},3,"<","/ev",{"*":".^.^.c-2","flg":3},{"s":["^- Ask the robot to walk around the table",{"->":"$r","var":true},null]}],["ev",{"^->":"Command_Robot_3.0.3.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str",{"CNT?":".^.^.^.Shake_hand"},3,"<","/ev",{"*":".^.^.c-3","flg":3},{"s":["^- Ask the robot to shake your hand ",{"->":"$r","var":true},null]}],["ev",{"^->":"Command_Robot_3.0.4.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str",{"CNT?":".^.^.^.Draw_circle"},{"CNT?":".^.^.^.Pick_up_box"},"&&",{"CNT?":".^.^.^.Walk_around_table"},"&&",{"CNT?":".^.^.^.Shake_hand"},"&&","/ev",{"*":".^.^.c-4","flg":19},{"s":["^- Ask robot to leave the room ",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"Command_Robot_3.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.0.s"},[{"#n":"$r2"}],"\n",{"->":".^.^.^.Draw_circle"},{"#f":5}],"c-1":["ev",{"^->":"Command_Robot_3.0.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.1.s"},[{"#n":"$r2"}],"\n",{"->":".^.^.^.Pick_up_box"},{"#f":5}],"c-2":["ev",{"^->":"Command_Robot_3.0.c-2.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.2.s"},[{"#n":"$r2"}],"\n",{"->":".^.^.^.Walk_around_table"},{"#f":5}],"c-3":["ev",{"^->":"Command_Robot_3.0.c-3.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.3.s"},[{"#n":"$r2"}],"\n",{"->":".^.^.^.Shake_hand"},{"#f":5}],"c-4":["ev",{"^->":"Command_Robot_3.0.c-4.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.4.s"},[{"#n":"$r2"}],"\n",{"->":".^.^.^.Robot_3_leaves"},{"#f":5}]}],{"Draw_circle":["^The robot moves over to the whiteboard and after a moment of reflection picks up a pen. It starts to draw a circle, but then abruptly stops. It hastily erases the line it just drew, and starts again, drawing a full circle this time. The robot then puts the pen back on the board and rubs its palms against its thighs, waiting for the next command.","\n",{"->":".^.^"},{"#f":1}],"Pick_up_box":["^The robot looks around to locate a box on the floor. Once located, it shifts over to the box and leans down to pick it up. Gently grasping the box, it lifts it up to the table and places it by the edge, and looks up towards you inquisitively.","\n",{"->":".^.^"},{"#f":1}],"Walk_around_table":["^The robot hurriedly makes its way around the table. It stops suddenly when it reaches your side of the table and looks up at you, its gaze darting around. As you motion for it to pass, it lowers its head and continues around the table until it reaches the spot where it started.","\n",{"->":".^.^"},{"#f":1}],"Shake_hand":["^Blinking, the robot stretches out its hand towards you. You shake the robot's hand and its loose grip follows your movements. After shaking your hand, the robot moves a step back from you, almost bumping into a chair.","\n",{"->":".^.^"},{"#f":1}],"Robot_3_leaves":["^The robot looks at you, avoiding eye contact, and then swivels around and walks with short, brisk steps out of the room.","\n",{"->":"Rate_Robot_3"},{"#f":1}],"#f":1}],"Rate_Robot_3":[["ev",1,"/ev",{"VAR=":"Loop_count","re":true},"^When the robot has left, you bring up your clipboard to fill in your evaluation of robot #3. The evaluation reads as follows:","\n","^On a scale of 1 to 5, where 1 is \"Not accurate\" and 5 is \"Very accurate\", how well do the following words describe the robot you just interacted with?","\n",{"->":".^.Top_of_adjective_loop"},["ev",{"VAR?":"Robot_personality"},"LIST_COUNT",{"VAR?":"Loop_count"},"<","/ev",[{"->":".^.b","c":true},{"b":["\n",{"->":".^.^.^.^.Next_robot"},{"->":".^.^.^.8"},null]}],[{"->":".^.b"},{"b":["\n",{"->":".^.^.^.Rating_part"},{"->":".^.^.^.8"},null]}],"nop","\n",["ev","^Robot_personality",{"VAR?":"Loop_count"},"listInt","out","/ev","\n","ev",{"VAR?":"Loop_count"},1,"+",{"VAR=":"Loop_count","re":true},"/ev","ev","str","^1","/str","/ev",{"*":".^.c-0","flg":4},"ev","str","^2","/str","/ev",{"*":".^.c-1","flg":4},"ev","str","^3","/str","/ev",{"*":".^.c-2","flg":4},"ev","str","^4","/str","/ev",{"*":".^.c-3","flg":4},"ev","str","^5","/str","/ev",{"*":".^.c-4","flg":4},{"c-0":["\n","ev",{"VAR?":"RobotRatings"},"str","^1","/str","+",{"VAR=":"RobotRatings","re":true},"/ev",{"->":".^.^.^"},{"->":".^.^.^.^.Next_robot"},{"#f":5}],"c-1":["^  ","\n","ev",{"VAR?":"RobotRatings"},"str","^2","/str","+",{"VAR=":"RobotRatings","re":true},"/ev",{"->":".^.^.^"},{"->":".^.^.^.^.Next_robot"},{"#f":5}],"c-2":["^  ","\n","ev",{"VAR?":"RobotRatings"},"str","^3","/str","+",{"VAR=":"RobotRatings","re":true},"/ev",{"->":".^.^.^"},{"->":".^.^.^.^.Next_robot"},{"#f":5}],"c-3":["^  ","\n","ev",{"VAR?":"RobotRatings"},"str","^4","/str","+",{"VAR=":"RobotRatings","re":true},"/ev",{"->":".^.^.^"},{"->":".^.^.^.^.Next_robot"},{"#f":5}],"c-4":["^  ","\n","ev",{"VAR?":"RobotRatings"},"str","^5","/str","+",{"VAR=":"RobotRatings","re":true},"/ev",{"->":".^.^.^"},{"->":".^.^.^.^.Next_robot"},{"#f":5}],"#f":5,"#n":"Rating_part"}],{"#f":5,"#n":"Top_of_adjective_loop"}],{"Next_robot":[["ev",{"^->":"Rate_Robot_3.0.Next_robot.0.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str",{"VAR?":"Robot_list"},"LIST_COUNT",0,">","/ev",{"*":".^.^.c-5","flg":3},{"s":["^- Ask to send the next robot in ",{"->":"$r","var":true},null]}],"ev","str","^Leave the room and end the test","/str",{"VAR?":"Robot_list"},"LIST_COUNT",0,"==","/ev",{"*":".^.c-6","flg":5},{"c-5":["ev",{"^->":"Rate_Robot_3.0.Next_robot.c-5.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.0.s"},[{"#n":"$r2"}],{"->":"Start_scene.Random_robot"},"\n",{"#f":5}],"c-6":["^ ",{"->":"End_scene"},"\n","end",{"#f":5}],"#f":5}]}],{"#f":1}],"Robot_4":["ev",{"VAR?":"RobotRatings"},"str","^-4-","/str","+",{"VAR=":"RobotRatings","re":true},"/ev","^<center><b>-------------Robot #4-------------</b></center>","\n","^The robot enters through the doorway and walks leisurely through the room, stopping next to the table. Its relaxed posture stiffens somewhat as it turns towards you and gives you an inquiring look.","\n",{"->":"Command_Robot_4"},{"#f":1}],"Command_Robot_4":[[["ev",{"^->":"Command_Robot_4.0.0.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str",{"CNT?":".^.^.^.Draw_circle"},3,"<","/ev",{"*":".^.^.c-0","flg":3},{"s":["^- Ask the robot to draw a circle on the whiteboard ",{"->":"$r","var":true},null]}],["ev",{"^->":"Command_Robot_4.0.1.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str",{"CNT?":".^.^.^.Pick_up_box"},3,"<","/ev",{"*":".^.^.c-1","flg":3},{"s":["^- Ask the robot to pick up a box from the floor and place it on the table",{"->":"$r","var":true},null]}],["ev",{"^->":"Command_Robot_4.0.2.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str",{"CNT?":".^.^.^.Walk_around_table"},3,"<","/ev",{"*":".^.^.c-2","flg":3},{"s":["^- Ask the robot to walk around the table",{"->":"$r","var":true},null]}],["ev",{"^->":"Command_Robot_4.0.3.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str",{"CNT?":".^.^.^.Shake_hand"},3,"<","/ev",{"*":".^.^.c-3","flg":3},{"s":["^- Ask the robot to shake your hand ",{"->":"$r","var":true},null]}],["ev",{"^->":"Command_Robot_4.0.4.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str",{"CNT?":".^.^.^.Draw_circle"},{"CNT?":".^.^.^.Pick_up_box"},"&&",{"CNT?":".^.^.^.Walk_around_table"},"&&",{"CNT?":".^.^.^.Shake_hand"},"&&","/ev",{"*":".^.^.c-4","flg":19},{"s":["^- Ask robot to leave the room ",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"Command_Robot_4.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.0.s"},[{"#n":"$r2"}],"\n",{"->":".^.^.^.Draw_circle"},{"#f":5}],"c-1":["ev",{"^->":"Command_Robot_4.0.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.1.s"},[{"#n":"$r2"}],"\n",{"->":".^.^.^.Pick_up_box"},{"#f":5}],"c-2":["ev",{"^->":"Command_Robot_4.0.c-2.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.2.s"},[{"#n":"$r2"}],"\n",{"->":".^.^.^.Walk_around_table"},{"#f":5}],"c-3":["ev",{"^->":"Command_Robot_4.0.c-3.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.3.s"},[{"#n":"$r2"}],"\n",{"->":".^.^.^.Shake_hand"},{"#f":5}],"c-4":["ev",{"^->":"Command_Robot_4.0.c-4.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.4.s"},[{"#n":"$r2"}],"\n",{"->":".^.^.^.Robot_4_leaves"},{"#f":5}]}],{"Draw_circle":["^The robot walks over to the whiteboard and assesses the pens and the board. It picks up one of them, and with a wide, graceful motion, it draws a large circle on the whiteboard and returns the pen to the board.","\n",{"->":".^.^"},{"#f":1}],"Pick_up_box":["^The robot approaches a box on the floor and picks it up with a large, deliberate movement. It places the box on the table, and turns its head to look at you.","\n",{"->":".^.^"},{"#f":1}],"Walk_around_table":["^The robot nods slightly in confirmation and proceeds to move smoothly around the table. With lengthy strides, it makes its way around the table but stops once it approaches you, and motions for you to step aside. As you move to the side, it passes you, and stops once its made its lap.","\n",{"->":".^.^"},{"#f":1}],"Shake_hand":["^The robot approaches you and extends a hand. The handshake is vigorous, and you can feel the robot move your hand up and down.","\n",{"->":".^.^"},{"#f":1}],"Robot_4_leaves":["^As you ask the robot to leave, it breaks eye contact with you, turns towards the door, and exits the room with heavy footfalls.","\n",{"->":"Rate_Robot_4"},{"#f":1}],"#f":1}],"Rate_Robot_4":[["ev",1,"/ev",{"VAR=":"Loop_count","re":true},"^When the robot has left, you bring up your clipboard to fill in your evaluation of robot #4. The evaluation reads as follows:","\n","^On a scale of 1 to 5, where 1 is \"Not accurate\" and 5 is \"Very accurate\", how well do the following words describe the robot you just interacted with?","\n",{"->":".^.Top_of_adjective_loop"},["ev",{"VAR?":"Robot_personality"},"LIST_COUNT",{"VAR?":"Loop_count"},"<","/ev",[{"->":".^.b","c":true},{"b":["\n",{"->":".^.^.^.^.Next_robot"},{"->":".^.^.^.8"},null]}],[{"->":".^.b"},{"b":["\n",{"->":".^.^.^.Rating_part"},{"->":".^.^.^.8"},null]}],"nop","\n",["ev","^Robot_personality",{"VAR?":"Loop_count"},"listInt","out","/ev","\n","ev",{"VAR?":"Loop_count"},1,"+",{"VAR=":"Loop_count","re":true},"/ev","ev","str","^1","/str","/ev",{"*":".^.c-0","flg":4},"ev","str","^2","/str","/ev",{"*":".^.c-1","flg":4},"ev","str","^3","/str","/ev",{"*":".^.c-2","flg":4},"ev","str","^4","/str","/ev",{"*":".^.c-3","flg":4},"ev","str","^5","/str","/ev",{"*":".^.c-4","flg":4},{"c-0":["\n","ev",{"VAR?":"RobotRatings"},"str","^1","/str","+",{"VAR=":"RobotRatings","re":true},"/ev",{"->":".^.^.^"},{"->":".^.^.^.^.Next_robot"},{"#f":5}],"c-1":["^  ","\n","ev",{"VAR?":"RobotRatings"},"str","^2","/str","+",{"VAR=":"RobotRatings","re":true},"/ev",{"->":".^.^.^"},{"->":".^.^.^.^.Next_robot"},{"#f":5}],"c-2":["^  ","\n","ev",{"VAR?":"RobotRatings"},"str","^3","/str","+",{"VAR=":"RobotRatings","re":true},"/ev",{"->":".^.^.^"},{"->":".^.^.^.^.Next_robot"},{"#f":5}],"c-3":["^  ","\n","ev",{"VAR?":"RobotRatings"},"str","^4","/str","+",{"VAR=":"RobotRatings","re":true},"/ev",{"->":".^.^.^"},{"->":".^.^.^.^.Next_robot"},{"#f":5}],"c-4":["^  ","\n","ev",{"VAR?":"RobotRatings"},"str","^5","/str","+",{"VAR=":"RobotRatings","re":true},"/ev",{"->":".^.^.^"},{"->":".^.^.^.^.Next_robot"},{"#f":5}],"#f":5,"#n":"Rating_part"}],{"#f":5,"#n":"Top_of_adjective_loop"}],{"Next_robot":[["ev",{"^->":"Rate_Robot_4.0.Next_robot.0.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str",{"VAR?":"Robot_list"},"LIST_COUNT",0,">","/ev",{"*":".^.^.c-5","flg":3},{"s":["^- Ask to send the next robot in ",{"->":"$r","var":true},null]}],"ev","str","^Leave the room and end the test","/str",{"VAR?":"Robot_list"},"LIST_COUNT",0,"==","/ev",{"*":".^.c-6","flg":5},{"c-5":["ev",{"^->":"Rate_Robot_4.0.Next_robot.c-5.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.0.s"},[{"#n":"$r2"}],{"->":"Start_scene.Random_robot"},"\n",{"#f":5}],"c-6":["^ ",{"->":"End_scene"},"\n","end",{"#f":5}],"#f":5}]}],{"#f":1}],"global decl":["ev","str","^","/str",{"VAR=":"RobotRatings"},{"list":{"Robot_personality.Anxious":1,"Robot_personality.Assertive":2,"Robot_personality.Harsh":3,"Robot_personality.Insecure":4,"Robot_personality.Extroverted":5,"Robot_personality.Nervous":6,"Robot_personality.Reserved":7,"Robot_personality.Relaxed":8,"Robot_personality.Bold":9}},{"VAR=":"Robot_personality"},{"list":{"Robot_list.Robot_var_1":1,"Robot_list.Robot_var_2":2,"Robot_list.Robot_var_3":3,"Robot_list.Robot_var_4":4}},{"VAR=":"Robot_list"},0,{"VAR=":"Current_robot"},1,{"VAR=":"Loop_count"},"/ev","end",null],"#f":1}],"listDefs":{"Robot_personality":{"Anxious":1,"Assertive":2,"Harsh":3,"Insecure":4,"Extroverted":5,"Nervous":6,"Reserved":7,"Relaxed":8,"Bold":9},"Robot_list":{"Robot_var_1":1,"Robot_var_2":2,"Robot_var_3":3,"Robot_var_4":4}}};