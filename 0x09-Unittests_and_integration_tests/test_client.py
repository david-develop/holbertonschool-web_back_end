#!/usr/bin/env python3
"""
Integration test module
"""
import unittest
from client import GithubOrgClient
from parameterized import parameterized


class TestGithubOrgClient(unittest.TestCase):
    """TestGithubOrgClient class"""
    @parameterized.expand([
        ('google'),
        ('abc')
    ])
    def test_org(self, input, mock):
        """Test mock org"""
        test_class = GithubOrgClient(input)
        test_class.org()
        mock.assert_called_once_with(f'https://api.github.com/orgs/{input}')
