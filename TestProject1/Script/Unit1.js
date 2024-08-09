function Test1()
{
  //Runs the "notepad" tested application.
  TestedApps.notepad.Run();
  //Maximizes the 'wndNotepad' window.
  Aliases.notepad.wndNotepad.Maximize();
  //Enters 'djcgbsjdc' in the 'Edit' object.
  Aliases.notepad.wndNotepad.Edit.Keys("djcgbsjdc");
  //Moves the mouse cursor to the menu item specified and then simulates a single click.
  Aliases.notepad.wndNotepad.MainMenu.Click("File|Page Setup...");
  //Clicks the 'radioLandscape' radio button.
  Aliases.notepad.dlgPageSetup.radioLandscape.ClickButton();
  //Selects the 'Letter' item of the 'cbxSize' combo box.
  Aliases.notepad.dlgPageSetup.cbxSize.ClickItem("Letter");
  //Clicks the 'btnOK' button.
  Aliases.notepad.dlgPageSetup.btnOK.ClickButton();
  //Closes the 'wndNotepad' window.
  Aliases.notepad.wndNotepad.Close();
  //Clicks the 'btnDontSave' button.
  Aliases.notepad.dlgNotepad.Notepad.CtrlNotifySink.btnDontSave.ClickButton();
}

function ocr()
{
  //Simulates a user action over the area that contains the recognized text.
  OCR.Recognize(Aliases.browser.pageConsumerSalesSalesRepPerform.articleScatterPlot.panelMargin).BlockByText("Wine").Click();
  //Check whether '*-5M
  //Fresh Vegetables
  //*' matches the text optically recognized in the image Aliases.browser.pageConsumerSalesSalesRepPerform.articleScatterPlot.panelMargin.
  OCR.Recognize(Aliases.browser.pageConsumerSalesSalesRepPerform.articleScatterPlot.panelMargin).CheckText("*-5M\nFresh Vegetables\n*");
}