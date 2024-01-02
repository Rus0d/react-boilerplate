import React from "react";
import { Link, Outlet, useNavigation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";
import Button from "@mui/material/Button";

import { ThemeToggle, toggleThemeColor } from "components/theme-provider";
import "index.scss";

export default function Layout() {
  let navigation = useNavigation();
  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();

  const changeLanguage = (lng: string): void => {
    i18n.changeLanguage(lng);
  };

  return (
    <div>
      <div style={{ position: "fixed", top: 0, right: 0 }}>{navigation.state !== "idle" && <p>Navigation in progress...</p>}</div>

      <nav>
        <ul>
          <li>
            <Link to="/">{t("layout.menu.home")}</Link>
          </li>
          <li>
            <Link to="/courses">{t("layout.menu.courses")}</Link>
          </li>
          <li>
            <Link to="/nothing-here">{t("layout.menu.nothing")}</Link>
          </li>
          <li>
            <Button onClick={() => dispatch(toggleThemeColor())}>
              <ThemeToggle />
              {t("layout.menu.theme")}
            </Button>
          </li>
          <li>
            <Button onClick={() => changeLanguage("en")}>English</Button>
          </li>
          <li>
            <Button onClick={() => changeLanguage("es")}>Spanish</Button>
          </li>
        </ul>
      </nav>

      <hr />

      <Outlet />
    </div>
  );
}
