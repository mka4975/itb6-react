const TABS: string[] = ["messages-link", "add-new-message-link"];

export function setActiveTab(activeTab: number): void {
  const activeTabs: NodeListOf<Element> = document.querySelectorAll(
    ".nav-link.active"
  );

  // Since there should never be more then one open tab we can
  // just use remove the active class from the first one
  if (activeTabs[0]) {
    activeTabs[0].classList.remove("active");
  }

  document.getElementById(TABS[activeTab]).classList.add("active");
}

export function setUnreadMessagesCount(num: number): void {
  const tab: Element = document.getElementById(TABS[0]);

  if (num > 0) {
    tab.innerHTML = `Messages (${num > 5 ? "5+" : num} new)`;
  } else {
    tab.innerHTML = "Messages";
  }
}
